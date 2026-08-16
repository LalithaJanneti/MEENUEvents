import http from 'node:http';
import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';

dotenv.config();

const bookings = [];
const consultationClicks = [];

async function saveToSupabase(payload, tableName) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  // Ensure the URL is constructed correctly, even if SUPABASE_URL has a trailing slash or path.
  const baseUrl = new URL(supabaseUrl);
  const finalUrl = new URL(`/rest/v1/${tableName}`, baseUrl);
  const response = await fetch(finalUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Supabase error response:', errorBody);
    throw new Error(`Supabase request failed with status ${response.status}: ${errorBody}`);
  }

  // With 'return=minimal', Supabase returns an empty body on success.
  // Avoid parsing it as JSON.
  const responseText = await response.text();
  if (responseText) return JSON.parse(responseText);
  return null;
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(payload));
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 1e6) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });

    req.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error('Invalid JSON payload'));
      }
    });

    req.on('error', reject);
  });
}

export async function startServer({ port = 3000 } = {}) {
  const server = http.createServer(async (req, res) => {
    const { url = '/' } = req;
    const requestUrl = new URL(url, 'http://localhost');

    if (req.method === 'GET' && requestUrl.pathname === '/api/health') {
      sendJson(res, 200, { status: 'ok' });
      return;
    }

    if (req.method === 'GET' && requestUrl.pathname === '/api/bookings') {
      sendJson(res, 200, { bookings });
      return;
    }

    if (req.method === 'POST' && requestUrl.pathname === '/api/bookings') {
      try {
        const payload = await parseJsonBody(req);
        // The payload from the form is the booking data.
        // Let Supabase handle the ID and createdAt timestamp.
        bookings.push(payload);
        const supabaseResponse = await saveToSupabase(payload, 'bookings');
        console.log('Successfully saved booking to Supabase:', supabaseResponse);
        sendJson(res, 201, { message: 'Booking received', booking: payload });
      } catch (error) {
        console.error('Failed to save booking to Supabase:', error);
        sendJson(res, 400, { error: error.message || 'Unable to process booking' });
      }
      return;
    }

    if (req.method === 'POST' && requestUrl.pathname === '/api/consultation-clicks') {
      try {
        const payload = await parseJsonBody(req);
        // The payload from the frontend is the click data.
        // Let Supabase handle the ID and createdAt timestamp.
        consultationClicks.push(payload);
        const supabaseResponse = await saveToSupabase(payload, 'consultation_clicks');
        console.log('Successfully recorded click to Supabase:', supabaseResponse);
        sendJson(res, 201, { message: 'Consultation click recorded', click: payload });
      } catch (error) {
        console.error('Failed to record click to Supabase:', error);
        sendJson(res, 400, { error: error.message || 'Unable to record consultation click' });
      }
      return;
    }

    sendJson(res, 404, { error: 'Not found' });
  });

  await new Promise((resolve) => {
    server.listen(port, '0.0.0.0', () => resolve());
  });

  return server;
}

// Check if the script is being run directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 3000);
  startServer({ port }).then(() => {
    console.log(`Backend running on http://localhost:${port}`);
  }).catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });
}

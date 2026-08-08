import http from 'node:http';

const bookings = [];
const consultationClicks = [];

async function saveToSupabase(payload, tableName) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/${tableName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Prefer': 'return=representation'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Supabase request failed with status ${response.status}`);
  }

  return response.json();
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
        const booking = {
          id: `${Date.now()}-${bookings.length + 1}`,
          name: payload.name || '',
          phone: payload.phone || '',
          email: payload.email || '',
          city: payload.city || '',
          event: payload.event || '',
          date: payload.date || '',
          guests: payload.guests || '',
          message: payload.message || '',
          createdAt: new Date().toISOString()
        };

        bookings.push(booking);
        await saveToSupabase(booking, 'bookings');
        sendJson(res, 201, { message: 'Booking received', booking });
      } catch (error) {
        sendJson(res, 400, { error: error.message || 'Unable to process booking' });
      }
      return;
    }

    if (req.method === 'POST' && requestUrl.pathname === '/api/consultation-clicks') {
      try {
        const payload = await parseJsonBody(req);
        const click = {
          id: `${Date.now()}-${consultationClicks.length + 1}`,
          source: payload.source || 'unknown',
          label: payload.label || 'Book Consultation',
          page: payload.page || 'unknown',
          createdAt: new Date().toISOString()
        };

        consultationClicks.push(click);
        await saveToSupabase(click, 'consultation_clicks');
        sendJson(res, 201, { message: 'Consultation click recorded', click });
      } catch (error) {
        sendJson(res, 400, { error: error.message || 'Unable to record consultation click' });
      }
      return;
    }

    sendJson(res, 404, { error: 'Not found' });
  });

  await new Promise((resolve) => {
    server.listen(port, () => resolve());
  });

  return server;
}

if (process.argv[1] && import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT || 3000);
  startServer({ port }).then(() => {
    console.log(`Backend running on http://localhost:${port}`);
  }).catch((error) => {
    console.error('Failed to start server:', error);
    process.exit(1);
  });
}

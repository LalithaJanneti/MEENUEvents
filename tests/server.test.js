import test from 'node:test';
import assert from 'node:assert/strict';
import { startServer } from '../server.js';

test('health endpoint responds with ok', async () => {
  const server = await startServer({ port: 0 });
  const address = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${address.port}/api/health`);
    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.equal(payload.status, 'ok');
  } finally {
    server.close();
  }
});

test('booking submissions are accepted and stored', async () => {
  const server = await startServer({ port: 0 });
  const address = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${address.port}/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Asha Rao',
        phone: '9876543210',
        email: 'asha@example.com',
        city: 'hyderabad',
        event: 'wedding',
        date: '2026-12-20',
        guests: '120',
        budget: '₹2–5 Lakh',
        message: 'Need a small wedding reception.'
      })
    });

    assert.equal(response.status, 201);
    const payload = await response.json();
    assert.equal(payload.booking.name, 'Asha Rao');
  } finally {
    server.close();
  }
});

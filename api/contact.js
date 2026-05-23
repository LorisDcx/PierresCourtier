export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ ok: false, error: 'Method not allowed.' });
    return;
  }

  const body = await new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error('Invalid JSON payload.'));
      }
    });
    req.on('error', reject);
  }).catch((error) => {
    res.status(400).json({ ok: false, error: error.message });
    return null;
  });

  if (!body) return;

  const requiredFields = ['nom', 'email', 'typePierre', 'budget', 'message'];
  const missingFields = requiredFields.filter((field) => {
    const value = body[field];
    return typeof value !== 'string' || value.trim() === '';
  });

  if (missingFields.length > 0) {
    res.status(400).json({ ok: false, error: 'Missing required fields.' });
    return;
  }

  const website = typeof body.website === 'string' ? body.website.trim() : '';
  if (website) {
    res.status(200).json({ ok: true });
    return;
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!to || !from || !resendApiKey) {
    res.status(501).json({
      ok: false,
      error: 'Email delivery is not configured.',
    });
    return;
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Nouvelle demande de contact - ${String(body.nom).trim()}`,
      text: [
        `Nom: ${String(body.nom).trim()}`,
        `Email: ${String(body.email).trim()}`,
        `Type de pierre: ${String(body.typePierre).trim()}`,
        `Budget: ${String(body.budget).trim()}`,
        `Usage: ${typeof body.usage === 'string' ? body.usage.trim() : ''}`,
        `Délai: ${typeof body.delai === 'string' ? body.delai.trim() : ''}`,
        '',
        String(body.message).trim(),
      ].join('\n'),
      reply_to: String(body.email).trim(),
    }),
  });

  if (!response.ok) {
    res.status(502).json({ ok: false, error: 'Unable to send email.' });
    return;
  }

  res.status(200).json({ ok: true });
}

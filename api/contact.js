import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = 'lorisdcx.pro@gmail.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ ok: false, error: 'Method not allowed.' });
    return;
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};

  const requiredFields = ['nom', 'email', 'typePierre', 'budget', 'message'];
  const missingFields = requiredFields.filter((field) => {
    const value = body[field];
    return typeof value !== 'string' || value.trim() === '';
  });

  if (missingFields.length > 0) {
    res.status(400).json({ ok: false, error: 'Missing required fields.' });
    return;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    res.status(501).json({
      ok: false,
      error: 'SMTP Gmail not configured.',
    });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const subject = `Nouvelle demande de contact - ${String(body.nom).trim()}`;
  const text = [
    `Nom: ${String(body.nom).trim()}`,
    `Email: ${String(body.email).trim()}`,
    `Type de pierre: ${String(body.typePierre).trim()}`,
    `Budget: ${String(body.budget).trim()}`,
    `Usage: ${typeof body.usage === 'string' ? body.usage.trim() : ''}`,
    `Délai: ${typeof body.delai === 'string' ? body.delai.trim() : ''}`,
    '',
    String(body.message).trim(),
  ].join('\n');

  try {
    await transporter.sendMail({
      from: `"Pierres Courtier" <${gmailUser}>`,
      to: RECIPIENT_EMAIL,
      replyTo: String(body.email).trim(),
      subject,
      text,
    });
  } catch (error) {
    res.status(502).json({
      ok: false,
      error: 'Unable to send email.',
    });
    return;
  }

  res.status(200).json({ ok: true });
}

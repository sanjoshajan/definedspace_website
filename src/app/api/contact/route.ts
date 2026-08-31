import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting: max 5 requests per minute per IP
const rateLimitMap = new Map<string, { count: number; expiresAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5;

  const current = rateLimitMap.get(ip);
  if (!current || now > current.expiresAt) {
    rateLimitMap.set(ip, { count: 1, expiresAt: now + windowMs });
    return false;
  }

  if (current.count >= maxRequests) {
    return true;
  }

  current.count += 1;
  return false;
}

// Clean and sanitize string inputs to prevent HTML/XSS injection
function sanitize(input: unknown): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // remove raw HTML angle brackets
    .trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[+\d\s\-()]{7,25}$/.test(phone);
}

export async function POST(request: Request) {
  try {
    // Client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions from this connection. Please wait a minute or call us directly.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, message, service, _gotcha } = body;

    // Honeypot spam check (if filled, silently succeed to fool automated bots)
    if (_gotcha) {
      return NextResponse.json(
        { success: true, message: 'Thank you. Your inquiry has been received.' },
        { status: 200 }
      );
    }

    // Sanitize values
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanPhone = sanitize(phone);
    const cleanMessage = sanitize(message);
    const cleanService = sanitize(service);

    // Validation checks
    if (!cleanName || cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        { error: 'Please provide a valid full name (2 to 100 characters).' },
        { status: 400 }
      );
    }

    if (!cleanPhone || !isValidPhone(cleanPhone)) {
      return NextResponse.json(
        { error: 'Please provide a valid contact phone number.' },
        { status: 400 }
      );
    }

    if (cleanEmail && !isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address format.' },
        { status: 400 }
      );
    }

    if (!cleanMessage || cleanMessage.length < 5 || cleanMessage.length > 3000) {
      return NextResponse.json(
        { error: 'Please describe your project requirements (at least 5 characters).' },
        { status: 400 }
      );
    }

    // Check SMTP configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'definedspacearchitecture@gmail.com';

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${cleanName} (via Defined Space Web)" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: cleanEmail || undefined,
        subject: `New Client Inquiry: ${cleanName}${cleanService ? ` [${cleanService}]` : ''}`,
        text: `
Name: ${cleanName}
Phone: ${cleanPhone}
Email: ${cleanEmail || 'Not provided'}
Service Interested: ${cleanService || 'General Inquiry'}

Message:
${cleanMessage}
        `,
        html: `
<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E4EFE7; border-radius: 12px; background-color: #F9FCFA;">
  <h2 style="color: #1A1F1C; margin-top: 0;">New Project Inquiry — Defined Space Architecture</h2>
  <div style="margin: 20px 0; padding: 16px; background-color: #FFFFFF; border: 1px solid #E4EFE7; border-radius: 8px;">
    <p style="margin: 6px 0;"><strong>Name:</strong> ${cleanName}</p>
    <p style="margin: 6px 0;"><strong>Phone:</strong> <a href="tel:${cleanPhone}">${cleanPhone}</a></p>
    <p style="margin: 6px 0;"><strong>Email:</strong> ${cleanEmail ? `<a href="mailto:${cleanEmail}">${cleanEmail}</a>` : 'Not provided'}</p>
    <p style="margin: 6px 0;"><strong>Service:</strong> ${cleanService || 'General Architectural Inquiry'}</p>
  </div>
  <h4 style="color: #1A1F1C; margin-bottom: 8px;">Project Details:</h4>
  <p style="white-space: pre-wrap; line-height: 1.6; color: #4A524D; background: #FFFFFF; padding: 16px; border-radius: 8px; border: 1px solid #E4EFE7;">${cleanMessage}</p>
  <hr style="border: none; border-top: 1px solid #E4EFE7; margin: 24px 0;" />
  <p style="font-size: 12px; color: #8D948E;">Defined Space Architecture • Kanhangad & Chullikara, Kasaragod</p>
</div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.log('--- [CONTACT INQUIRY RECEIVED (Preview Mode)] ---');
      console.log({
        name: cleanName,
        phone: cleanPhone,
        email: cleanEmail,
        service: cleanService,
        message: cleanMessage,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out. We have received your inquiry and our team will get in touch shortly.',
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Contact form endpoint error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your inquiry. Please call us directly.' },
      { status: 500 }
    );
  }
}

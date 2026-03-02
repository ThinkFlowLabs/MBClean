import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/forms/validation';
import { sendContactNotification } from '@/lib/forms/email';
import { appendContactToSheet } from '@/lib/forms/google-sheets';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactFormSchema.parse(body);

    // Send email notification and append to Google Sheets in parallel
    await Promise.allSettled([
      sendContactNotification(data),
      appendContactToSheet({
        timestamp: new Date().toISOString(),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        company: data.company || '',
        service: data.service || '',
        message: data.message,
        source: 'website-contact-form',
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact request' },
      { status: 400 },
    );
  }
}

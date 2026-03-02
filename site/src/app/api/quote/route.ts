import { NextResponse } from 'next/server';
import { quoteFormSchema } from '@/lib/forms/validation';
import { sendQuoteNotification } from '@/lib/forms/email';
import { appendQuoteToSheet } from '@/lib/forms/google-sheets';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = quoteFormSchema.parse(body);

    // Send email notification and append to Google Sheets in parallel
    await Promise.allSettled([
      sendQuoteNotification(data),
      appendQuoteToSheet({
        timestamp: new Date().toISOString(),
        service: data.service,
        propertyType: data.propertyType,
        squareFootage: data.squareFootage,
        additionalDetails: data.additionalDetails || '',
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        company: data.company || '',
        preferredDate: data.preferredDate || '',
        source: 'website-quote-form',
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote form error:', error);
    return NextResponse.json(
      { error: 'Failed to process quote request' },
      { status: 400 },
    );
  }
}

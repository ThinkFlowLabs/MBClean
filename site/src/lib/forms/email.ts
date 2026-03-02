import { Resend } from 'resend';

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY is not configured');
  return new Resend(apiKey);
}

const FROM_EMAIL = 'MB Clean Solutions <noreply@mbcleansolutions.com>';
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'info@mbcleansolutions.com';

interface QuoteNotification {
  service: string;
  propertyType: string;
  squareFootage: string;
  additionalDetails?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  preferredDate?: string;
}

interface ContactNotification {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

export async function sendQuoteNotification(data: QuoteNotification) {
  const { error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: NOTIFICATION_EMAIL,
    replyTo: data.email,
    subject: `New Quote Request: ${data.service} from ${data.firstName} ${data.lastName}`,
    html: `
      <h2>New Quote Request</h2>
      <hr>
      <h3>Service Details</h3>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Property Type:</strong> ${data.propertyType}</p>
      <p><strong>Square Footage:</strong> ${data.squareFootage}</p>
      ${data.additionalDetails ? `<p><strong>Additional Details:</strong> ${data.additionalDetails}</p>` : ''}
      ${data.preferredDate ? `<p><strong>Preferred Date:</strong> ${data.preferredDate}</p>` : ''}
      <hr>
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
      <hr>
      <p><em>Sent from mbcleansolutions.com quote form</em></p>
    `,
  });

  if (error) throw error;
}

export async function sendContactNotification(data: ContactNotification) {
  const { error } = await getResend().emails.send({
    from: FROM_EMAIL,
    to: NOTIFICATION_EMAIL,
    replyTo: data.email,
    subject: `New Contact Form: ${data.firstName} ${data.lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <hr>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
      ${data.service ? `<p><strong>Interested Service:</strong> ${data.service}</p>` : ''}
      <hr>
      <h3>Message</h3>
      <p>${data.message}</p>
      <hr>
      <p><em>Sent from mbcleansolutions.com contact form</em></p>
    `,
  });

  if (error) throw error;
}

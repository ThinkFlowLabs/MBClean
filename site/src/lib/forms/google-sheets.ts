import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID;

async function getAuth() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: SCOPES,
  });
  return auth;
}

interface QuoteRow {
  timestamp: string;
  service: string;
  propertyType: string;
  squareFootage: string;
  additionalDetails: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  preferredDate: string;
  source: string;
}

interface ContactRow {
  timestamp: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  source: string;
}

export async function appendQuoteToSheet(data: QuoteRow) {
  if (!SPREADSHEET_ID) return;

  const auth = await getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Quotes!A:L',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          data.timestamp,
          data.service,
          data.propertyType,
          data.squareFootage,
          data.additionalDetails,
          data.firstName,
          data.lastName,
          data.email,
          data.phone,
          data.company,
          data.preferredDate,
          data.source,
        ],
      ],
    },
  });
}

export async function appendContactToSheet(data: ContactRow) {
  if (!SPREADSHEET_ID) return;

  const auth = await getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Contacts!A:I',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          data.timestamp,
          data.firstName,
          data.lastName,
          data.email,
          data.phone,
          data.company,
          data.service,
          data.message,
          data.source,
        ],
      ],
    },
  });
}

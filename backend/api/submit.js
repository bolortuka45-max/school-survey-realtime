const { google } = require('googleapis');
const keys = require('../../service-account.json'); // JSON key файлын зам

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const { code, timestamp } = req.body;

  try {
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const gsapi = google.sheets({ version: 'v4', auth: client });
    const spreadsheetId = 'YOUR_SPREADSHEET_ID';

    await gsapi.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      resource: { values: [[code, timestamp, 'logged_in']] },
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: err });
  }
}


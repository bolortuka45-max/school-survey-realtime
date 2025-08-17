const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const keys = require('./service-account.json'); // Service Account JSON

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new google.auth.JWT(
  keys.client_email,
  null,
  keys.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
);

const spreadsheetId = "YOUR_SPREADSHEET_ID"; // Spreadsheet ID

app.post('/submit', async (req, res) => {
  const { code, timestamp } = req.body;

  try {
    const gsapi = google.sheets({ version: 'v4', auth: client });
    await gsapi.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      resource: { values: [[code, timestamp, 'logged_in']] },
    });
    res.send({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, error: err });
  }
});

app.listen(5000, () => console.log('Server started on port 5000'));


import { google } from "googleapis";

const SHEET_ID = "YOUR_SHEET_ID"; // Google Sheet ID
const CREDENTIALS = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT); // Vercel Environment Variable

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, code, timestamp } = req.body;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: CREDENTIALS,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:C",
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, code, timestamp]],
      },
    });

    res.status(200).json({ message: "Амжилттай submit боллоо!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Алдаа гарлаа" });
  }
}

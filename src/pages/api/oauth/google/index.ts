import { google } from "googleapis";

export const oauth2Client = new google.auth.OAuth2(
  import.meta.env.GOOGLE_CLIENT_ID,
  import.meta.env.GOOGLE_CLIENT_SECRET,
  import.meta.env.GOOGLE_REDIRECT_URI,
);

export async function GET() {
  const url = oauth2Client.generateAuthUrl({
    scope: ["https://www.googleapis.com/auth/userinfo.email"],
  });
  return Response.redirect(url);
}

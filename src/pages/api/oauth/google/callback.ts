import type { APIRoute } from "astro";
import { google } from "googleapis";

import { oauth2Client } from ".";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const code = new URL(request.url).searchParams.get("code");

  if (!code) {
    return new Response("No code provided", { status: 400 });
  }

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  const { data } = await google
    .oauth2("v2")
    .userinfo.get({ auth: oauth2Client });

  console.log(data);

  cookies.set("user", data, {
    path: "/",
    httpOnly: true,
  });

  return redirect("/");
};

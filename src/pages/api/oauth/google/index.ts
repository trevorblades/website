import { generateCodeVerifier, OAuth2Client } from "@badgateway/oauth2-client";
import type { APIRoute } from "astro";
import cookie from "cookie";

export const client = new OAuth2Client({
  server: "https://accounts.google.com",
  clientId: import.meta.env.GOOGLE_CLIENT_ID,
  clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
  discoveryEndpoint: "/.well-known/openid-configuration",
});

export const GET: APIRoute = async () => {
  const codeVerifier = await generateCodeVerifier();

  const authorizationUrl = await client.authorizationCode.getAuthorizeUri({
    redirectUri: import.meta.env.GOOGLE_REDIRECT_URI,
    codeVerifier,
    scope: ["openid", "email"],
  });

  return new Response(null, {
    status: 302,
    headers: {
      Location: authorizationUrl,
      "Set-Cookie": cookie.serialize("code_verifier", codeVerifier, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      }),
    },
  });
};

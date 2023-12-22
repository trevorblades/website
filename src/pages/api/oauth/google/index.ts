import { generateCodeVerifier, OAuth2Client } from "@badgateway/oauth2-client";
import type { APIRoute } from "astro";

export const client = new OAuth2Client({
  server: "https://accounts.google.com",
  clientId: import.meta.env.GOOGLE_CLIENT_ID,
  clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
  discoveryEndpoint: "/.well-known/openid-configuration",
});

export const GET: APIRoute = async ({ cookies }) => {
  const codeVerifier = await generateCodeVerifier();

  const authorizationUrl = await client.authorizationCode.getAuthorizeUri({
    redirectUri: import.meta.env.GOOGLE_REDIRECT_URI,
    // codeVerifier,
    scope: ["openid", "email"],
  });

  // cookies.set("code_verifier", codeVerifier, {
  //   httpOnly: true,
  //   secure: true,
  //   sameSite: "strict",
  // });

  return Response.redirect(authorizationUrl);
};

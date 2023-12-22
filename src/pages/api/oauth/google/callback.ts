import type { APIRoute } from "astro";

import { client } from ".";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const token = await client.authorizationCode.getTokenFromCodeRedirect(
    request.url,
    {
      redirectUri: import.meta.env.GOOGLE_REDIRECT_URI,
      codeVerifier: cookies.get("code_verifier")?.value,
    },
  );

  const { userinfo_endpoint } = await client
    .getEndpoint("discoveryEndpoint")
    .then((endpoint) => fetch(endpoint))
    .then((res) => res.json());

  const userInfoEndpoint = new URL(userinfo_endpoint);
  userInfoEndpoint.searchParams.set("access_token", token.accessToken);

  const userInfo = await fetch(userInfoEndpoint, {
    method: "POST",
  }).then((res) => res.json());

  cookies.set("user", JSON.stringify(userInfo), {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  return redirect("/");
};

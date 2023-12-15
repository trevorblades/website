import type { APIRoute } from "astro";

export const POST: APIRoute = ({ cookies }) => {
  const user = cookies.get("user");
  // console.log(user);
  return new Response(user ? user.value : JSON.stringify({ error: "No user" }));
};

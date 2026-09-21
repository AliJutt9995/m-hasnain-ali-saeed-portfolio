export function onRequestGet() {
  return Response.json({
    ok: true,
    assistant: "Hasnain AI",
    message: "Cloudflare API is working",
  });
}
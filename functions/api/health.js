export function onRequestGet(context) {
  return Response.json(
    {
      ok: true,
      openaiSecretAvailable: Boolean(context.env?.OPENAI_API_KEY),
      turnstileSecretAvailable: Boolean(
        context.env?.TURNSTILE_SECRET_KEY
      ),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
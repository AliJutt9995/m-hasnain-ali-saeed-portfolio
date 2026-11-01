export async function onRequestGet(context) {
  const geminiSecretAvailable = Boolean(
    context.env.GEMINI_API_KEY
  );

  return new Response(
    JSON.stringify({
      ok: true,
      geminiSecretAvailable,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Cache-Control": "no-store",
      },
    }
  );
}
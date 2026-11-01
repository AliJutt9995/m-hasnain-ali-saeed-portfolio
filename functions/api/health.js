export async function onRequestGet(context) {
  const openaiSecretAvailable = Boolean(
    context.env.OPENAI_API_KEY
  );

  return new Response(
    JSON.stringify({
      ok: true,
      openaiSecretAvailable,
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
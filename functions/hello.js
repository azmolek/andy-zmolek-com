export async function onRequest() {
  return new Response(JSON.stringify({ ok: true, msg: "Hello from andy.zmolek.com" }), {
    headers: { "content-type": "application/json" }
  });
}

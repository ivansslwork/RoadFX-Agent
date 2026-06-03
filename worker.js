export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/health') {
      return new Response(
        JSON.stringify({
          ok: true,
          service: 'arena-agent-workspace',
          timestamp: new Date().toISOString()
        }),
        {
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'cache-control': 'no-store'
          }
        }
      );
    }

    return env.ASSETS.fetch(request);
  }
};

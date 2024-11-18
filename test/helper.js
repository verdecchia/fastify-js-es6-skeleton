import helper from "fastify-cli/helper.js";
import path from "path";

const AppPath = path.join(import.meta.dirname, "../app", "app.js");

function config() {
  return {};
}

async function build(t) {
  const argv = [AppPath];

  const app = await helper.build(argv, config());

  t.after(() => app.close());

  return app;
}

export { config, build };

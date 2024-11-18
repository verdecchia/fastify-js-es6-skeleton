import { test } from "node:test";
import * as assert from "node:assert";
import { build } from "../helper.js";

test("status is loaded", async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: "/status",
  });

  const resBody = JSON.parse(res.payload);

  assert.equal(resBody.status, "ok");
});

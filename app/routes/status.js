export default async function (fastify, opts) {
  fastify.get("/status", async function (request, reply) {
    const version = process.version;
    const versions = process.versions;
    const platform = process.platform;
    const release = process.release;
    const memoryUsage = process.memoryUsage();
    const uptime = process.uptime();

    return {
      status: "ok",
      process: {
        env: process.env,
        version,
        versions,
        platform,
        release,
        memoryUsage,
        uptime,
      },
    };
  });
}

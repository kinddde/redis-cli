/**
 * 启动node服务
 *
 * 监听文件改动， 调用此方法重启服务
 * @return {[type]} [description]
 */
const cp = require("child_process");
const path = require("path");

let server;
module.exports = package => {
  if (server) {
    server.kill("SIGTERM");
  }
  server = cp.spawn("node", [
    path.resolve(__dirname, `../packages/${package}/lib/index.js`)
  ]);

  server.stdout.on("data", data => {
    const time = new Date().toTimeString();

    process.stdout.write(time.replace(/.*(\d{2}:\d{2}:\d{2}).*/, "[$1] "));

    process.stdout.write(data);
  });
  server.stderr.on("data", x => {
    process.stderr.write(x);
  });
};

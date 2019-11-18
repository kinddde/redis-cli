const json = {
  colors: true,
  hash: true,
  timings: true,
  modules: false,
  entrypoints: false
};

function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}

module.exports.createCompilation = function createCompilation(
  name,
  compiler,
  callback
) {
  let timeStart = new Date();

  compiler.hooks.compile.tap(name, () => {
    timeStart = new Date();
    console.info(`[${format(timeStart)}] Compiling '${name}'...`);
  });

  compiler.hooks.done.tap(name, stats => {
    console.info(stats.toString(json));
    const timeEnd = new Date();
    const time = timeEnd.getTime() - timeStart.getTime();

    if (stats.hasErrors()) {
      console.info(
        `[${format(timeEnd)}] Failed to compile '${name}' after ${time} ms`
      );
    } else {
      console.info(
        `[${format(timeEnd)}] Finished '${name}' compilation after ${time} ms`
      );

      callback && callback(false);
    }
  });
};

const webpack = require("webpack");

const resolveConfig = require("./webpack.config");

const { createCompilation } = require("./compiler");

const globby = require("globby");

const rimraf = require("rimraf");
const path = require("path");

const clentFile = (pattern, ignore) => {
  return new Promise((resolve, reject) => {
    rimraf(
      pattern,
      { glob: { nosort: true, dot: true, ignore: ignore || [] } },
      (err, result) => {
        err ? reject(err) : resolve(result);
      }
    );
  });
};

const build = package => {
  return new Promise(async resolve => {
    await clentFile(
      path.resolve(__dirname, "../packages/" + package + "/lib/**")
    );

    let config = resolveConfig(package, true);

    const compiler = webpack(config);

    createCompilation(package, compiler, resolve);

    compiler.run();
  });
};

async function run() {
  const pkgs = globby.sync(["packages/*"], { deep: 1, onlyFiles: false });

  for (let pkg of pkgs) {
    let package = pkg.replace("packages/", "");

    await build(package);
  }
}

run();

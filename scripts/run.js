const webpack = require("webpack");

const resolveConfig = require("./webpack.config");

const argvs = require("./argv");

const restart = require("./restart");

const { createCompilation } = require("./compiler");

const { package, mode } = argvs;

const isBuild = mode === "production";

const list = Object.keys(
    require(`../packages/${package}/package.json`).dependencies
);

let config = resolveConfig(package, isBuild, list);

const compiler = webpack(config);

createCompilation(package, compiler, () => {
    restart(package);
});

compiler.watch({}, () => {});

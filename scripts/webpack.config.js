var nodeExternals = require("webpack-node-externals");

const path = require("path");
const babelJson = require("../babel.config.json");

module.exports = (package, isBuild, modules = []) => {
    return {
        name: package,

        entry: path.resolve(
            __dirname,
            "../packages/" + package + "/src/index.js"
        ),

        output: {
            path: path.resolve(__dirname, "../packages/" + package + "/lib"),
            filename: "index.js",
            libraryTarget: "commonjs2",
        },
        target: "node",
        mode: isBuild ? "production" : "development", //
        resolve: {
            extensions: [".js"],
        },

        externals: [nodeExternals(), ...modules],

        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
                    options: {
                        fix: true,
                    },
                },
                {
                    test: /.js$/,
                    loader: "babel-loader",
                    options: babelJson,
                },
            ],
        },
    };
};

const jsdoc2md = require("jsdoc-to-markdown");

const fs = require("fs");

const path = require("path");

const keys = ["string", "key", "set", "hash", "redisPool", "list"];

function build(module) {
    return jsdoc2md
        .render({
            files: path.resolve(
                __dirname,
                `../packages/client/src/modules/${module}.js`
            ),
        })
        .then(data => {
            fs.writeFileSync(
                path.resolve(__dirname, `../packages/client/docs/${module}.md`),
                `# ${module} \n` + data
            );
        });
}

async function run() {
    for (let module of keys) {
        await build(module);
    }
}

run();

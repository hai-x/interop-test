const path = require("path");
const execNode = require("./execNode");
const runTest = require("./runTest");

module.exports = async (
  name,
  packages,
  ext,
  load = () => require("webpack")
) => {
  let webpack;
  await runTest({
    name,
    packages,
    ext,
    setup: () => (webpack = load()),
    execute: async (filename, idx) => {
      const webpack4 = webpack.version.startsWith("4.");
      const rspack = "rspackVersion" in webpack;
      return new Promise((resolve) =>
        webpack(
          {
            mode: "production",
            entry: `./src/${filename}`,
            output: {
              path: path.resolve(__dirname, `../../dist/${idx}`),
            },
            target: "node",
            optimization: webpack4
              ? {
                  noEmitOnErrors: false,
                  minimize: false,
                }
              : {
                  emitOnErrors: true,
                  minimize: false,
                },
            ...(webpack4 || rspack
              ? {}
              : {
                  experiments: { topLevelAwait: true },
                }),
          },
          (err, stats) => {
            if (err) return resolve("fatal error");
            resolve(
              (async () => {
                const result = await execNode(`dist/${idx}/main.js`);
                if (result.includes("error") && stats.hasErrors())
                  return "compilation error";
                return (
                  result +
                  (stats.hasErrors() ? " + errors" : "") +
                  (stats.hasWarnings() ? " + warnings" : "")
                );
              })()
            );
          }
        )
      );
    },
  });
};

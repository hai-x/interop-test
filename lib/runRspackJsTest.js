const runWebpackTest = require("./helpers/runWebpackTest");

runWebpackTest(
  "rspack-js",
  ["@rspack/core"],
  ".js",
  () => require("@rspack/core").rspack
);

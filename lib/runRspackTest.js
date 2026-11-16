const runWebpackTest = require("./helpers/runWebpackTest");

runWebpackTest(
  "rspack",
  ["@rspack/core"],
  ".mjs",
  () => require("@rspack/core").rspack
);

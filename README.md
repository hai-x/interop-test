# ESM-CJS interop test

This is a fork of [interop-test](https://github.com/sokra/interop-test) by [sokra](https://github.com/sokra), with [Rspack](by-tool#rspack) added to the tested tools.

- [Test Cases](fixtures)
- [Results](by-tool)
  - [Node.js](by-tool#nodejs)
  - [Babel](by-tool#babel)
  - [Webpack](by-tool#webpack)
  - [Rspack](by-tool#rspack)
  - [Rollup.js](by-tool#rollup)
  - [Parcel](by-tool#parcel)
  - [esbuild](by-tool#esbuild)
- [Results by test case](by-test-case)
- [Results by syntax](by-syntax)
  - [`import x`](by-syntax#import-x) and similar
  - [`import { named }`](by-syntax#import--named-as-x-) and similar
  - [`import { __esModule }`](by-syntax#import--__esmodule-as-x-) and similar
  - [`import *`](by-syntax#import--as-x) and similar
  - [`import()`](by-syntax#import) and similar
  - [`require().default`](by-syntax#x--require-xdefault) and similar
  - [`require().named`](by-syntax#-named---require) and similar
  - [`require().__esModule`](by-syntax#-__esmodule---require) and similar
  - [`require()`](by-syntax#x--require) and similar
- [Direct differences](diffs)
  - [Webpack <-> Node.js (`.mjs`)](diffs#webpack---nodejs-mjs)
  - [Babel <-> Node.js (`.mjs`)](diffs#babel---nodejs-mjs)
  - [Webpack `.mjs` <-> `.js`](diffs#babel-mjs---js)
  - [Babel `.mjs` <-> `.js`](diffs#webpack-mjs---js)
  - [Rspack <-> Webpack (`.mjs`)](diffs#rspack---webpack-mjs)
  - [Rspack <-> Webpack (`.js`)](diffs#rspack---webpack-js)

## Versions and environment

All results are generated locally with the latest version of each tool at the time of the run.

<!-- versions -->

| Tool         | Version                                                                                                                                   | Node.js | OS                  | Tested on  |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------- | ---------- |
| babel        | `@babel/cli@8.1.0`<br>`@babel/core@8.1.2`<br>`@babel/plugin-transform-modules-commonjs@8.1.2`<br>`babel-plugin-dynamic-import-node@2.3.3` | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |
| babel-js     | `@babel/cli@8.1.0`<br>`@babel/core@8.1.2`<br>`@babel/plugin-transform-modules-commonjs@8.1.2`<br>`babel-plugin-dynamic-import-node@2.3.3` | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |
| esbuild      | `esbuild@0.28.2`                                                                                                                          | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |
| node         | -                                                                                                                                         | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |
| parcel       | `@parcel/config-default@2.16.4`<br>`@parcel/core@2.16.4`                                                                                  | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |
| rollup       | `@rollup/plugin-commonjs@29.0.3`<br>`rollup@4.68.3`                                                                                       | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |
| rspack       | `@rspack/core@2.3.2`                                                                                                                      | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |
| rspack-js    | `@rspack/core@2.3.2`                                                                                                                      | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |
| webpack      | `webpack@5.112.2`                                                                                                                         | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |
| webpack-js   | `webpack@5.112.2`                                                                                                                         | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |
| webpack4     | `webpack@4.47.0`                                                                                                                          | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |
| webpack4-mjs | `webpack@4.47.0`                                                                                                                          | 26.13.1 | Darwin 27.0.0 arm64 | 2026-11-16 |

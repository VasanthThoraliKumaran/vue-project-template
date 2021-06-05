const webpack = require("webpack");
const fs = require("fs");
const packageJson = fs.readFileSync("./package.json");
const packageObj = JSON.parse(packageJson);
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          PACKAGE_VERSION: `"${packageObj.version}"`,
          PACKAGE_VERSION_CODE: packageObj.versionCode || 0,
        },
      }),
    ],
  },
  transpileDependencies: ["vuetify"],
};

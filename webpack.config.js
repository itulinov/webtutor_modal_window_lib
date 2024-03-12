const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require(
    "webpack/lib/container/ModuleFederationPlugin"
)

module.exports = {
    devtool: "source-map",
    mode: "development",
    devServer: {
        port: 3003,
    },
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js",
        clean: true,
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "mwLib",
            filename: "remoteEntry.js",
            exposes: {
                "./mwLibInit": "./src/run"
            }
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: "ie 9" }]
                    ]
                }
            }
        }]
    }
}

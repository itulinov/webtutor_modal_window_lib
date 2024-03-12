const path = require("path")

module.exports = {
    devtool: "source-map",
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "[name].bundle.js",
        clean: true,
    },
    optimization: {
        minimize: true,
    },
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

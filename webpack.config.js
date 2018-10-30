const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    context: path.join(__dirname,"src"),
    entry: {
        main: ["@babel/polyfill", "./js/main.js"]
    },
    output: {
        filename: "js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loader: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.mustache$/,
                loader: "mustache-loader"
            },
            {
                test: /\.(svg|png|eot|woff|woff2|ttf)$/,
                loader: "file-loader",
                options: {
                    name: 'assets/[name].[ext]',
                    context: ''
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./mustache/main.mustache",
            inject: false,
            filename: "index.html"
        })
    ]
};
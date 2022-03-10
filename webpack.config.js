const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    // entry file to a project
    entry: "./src/index.js",
    // result file location
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: "./src/index.html",
        }),
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [
        {
            // if you have .jsx file - make sure it uses 'babel-loader'
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"),
        },
        {
            // make sure it checks .css files and using "style-loader", "css-loader" for them
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        },
        {
            // make sure all .png and ... files will be built using file-loader 
            test: /\.png|svg|jpg|gif|jpeg$/,
            use: ["file-loader"],
        },
        ],
    },
};
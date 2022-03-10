# Using Dev Ed
- https://www.youtube.com/watch?v=EUM78cxo0i8

# Init
Init project: creates package.json
```
npm init -y
```

## React
Install react and react-dom
```
npm install react react-dom
```

## Babel
- @babel/core - helps to use modern javascript code that will automatically transpilled to older code for older browses
- @babel/preset-react - takes jsx code and turns it into vanilla ract
- babel-loader - connects babel and webpack
```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
```

## Webpack 
Combines all the code into one file
```
npm install webpack webpack-cli webpack-dev-server
```
Create file webpack.config.js

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};
```
## Webpack-plugin
It finds your html file and wherenever you build it will automatically your js file to it. ??? - to be confirmed
- html-webpack-plugin
```
npm install html-webpack-plugin
```

## Creating basic component
- create 'src' folder
- create index.js file inside
- create App.js file inside
- create index.html file inside

index.js
```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));
```
App.js
```
import React from 'react';

const App = () => (
    <div>
        <h1>Hello react</h1>
    </div>
);

export default App;
```
index.html
```
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

## Modify package.json
- webpack-dev-server - open up a development server
- --hot - automatically update the server with changes
- --open - opens new tab automatically
- --mode development - solves the webpack error

- webpack - telling webpack to build a final product
- make sure use webpack.config.js file in order to set everything up
```
"scripts": {
    "start": "webpack-dev-server --hot --mode development",
    "build": "webpack --config webpack.config.js --mode production"
},
```

## Run project
Project opens at http://localhost:8080/
```
npm start
```

# Adding styles to a project
These allows to use styles from .css files in components
```
npm install style-loader css-loader
```

## File loader
In order to be able to add files to project you need this
- --dev is required only for local builds but not for real site because it will use generated bundle
```
npm install --dev file-loader
```
Webpack config
```
{
    // make sure all .png and ... files will be built using file-loader 
    test: /\.png|svg|jpg|gif|jpeg$/,
    use: ["file-loader"],
},
```
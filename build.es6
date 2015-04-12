import metalsmith from "metalsmith";
import webpack from "metalsmith-webpack";
import reactTemplate from "metalsmith-react-templates";

metalsmith(__dirname)
  .use(reactTemplate({
    directory: "app",
    baseFile: "index.html",
    nonStatic: true
  }))
  .use(webpack({
    entry: './app/app.es6',
    output: {
      path: __dirname + '/build/js',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        { test: /\.(js|es6)$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.(jpg|png)$/, loader: "url-loader" },
        { test: /\.(json)$/, loader: "json-loader" },
      ]
    },
    resolve: {
      extensions: ["", ".web.js", ".js", ".jsx", ".es6"]
    }
  }))
  .build(function (err) {
    if (err) throw err;
  });

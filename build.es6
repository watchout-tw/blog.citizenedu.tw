import metalsmith from "metalsmith";
import webpack from "metalsmith-webpack";
import reactTemplate from "metalsmith-react-templates";
import excerpts from "metalsmith-excerpts";
import collections from "metalsmith-collections";
import branch from "metalsmith-branch";
import permalinks from "metalsmith-permalinks";

metalsmith(__dirname)
  .metadata({
    site: {
      title: "公民學院部落格",
      url: "http://blog.citizenedu.tw/"
    }
  })
  .use(collections({
    posts: {
      pattern: "posts/**.html"
    }
  }))
  .use(branch("posts/**.html")
    .use(permalinks({
      pattern: "posts/:path",
      relative: false
    }))
  )
  .use(branch("!posts/**.html")
    .use(branch("!index.html")
      .use(permalinks({
        relative: false
      }))
    )
  )
  .use(excerpts())
  .use(reactTemplate({
    directory: "app",
    baseFile: "index.html",
    nonStatic: true
  }))
  .use(webpack({
    entry: "./app/app.es6",
    output: {
      path: __dirname + "/build/js",
      filename: "bundle.js"
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
    console.log("Site build complete.");
  });

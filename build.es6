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
      title: "公民學院",
      url: "http://blog.citizenedu.tw/",
      description: '沃草公民學院是為所有人準備的人文學習、討論平台。我們不但小國小民，更要好國好民。',
      info: '<a href="/posts/990">第一次來？</a> | <a href="https://www.facebook.com/citizenedu" target="_blank">粉絲頁</a>',
      picture: "../../cover.jpg",
      post_picture: "http://community.citizenedu.tw/uploads/default/258/588e74a547d93ad5.png"
    }
  })
  .use(collections({
    posts: {
      pattern: "posts/**.html",
      sortBy: "created_at",
      reverse: true,
    },
    columns: {
      pattern: "columns/**.html"
    },
    subjects: {
      pattern: "subjects/**.html"
    },
    tags: {
      pattern: "tags/**.html"
    },
    authors: {
      pattern: "authors/**.html"
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
    entry: {
      app: "./app/app.es6",
      comments: "./app/comment.es6",
      social: "./app/social.es6",
    },
    output: {
      path: __dirname + "/build/js",
      filename: "[name].js"
    },
    module: {
      loaders: [
        { test: /\.(js|es6)$/, exclude: /node_modules/, loader: "babel-loader" },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.(jpg|png)$/, loader: "url-loader?limit=1" },
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

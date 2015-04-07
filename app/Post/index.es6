import React from "react";
import Article from "../components/Article/Article.es6";
import AppBar from "../components/AppBar/AppBar.es6";

export default React.createClass({
  displayName: "Post",
  render() {
    return (
      <div>
        <AppBar />
        <Article />
      </div>
    );
  }
});

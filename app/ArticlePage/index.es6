import React from "react";
import Article from "../components/Article/Article.es6";
import AppBar from "../components/AppBar/AppBar.es6";


export default React.createClass({
  displayName: "ArticlePage",

  render() {

    return (
      <div className="app">
        <AppBar type="simple"/>
        <Article {...this.props}/>
      </div>
    );
  }
});

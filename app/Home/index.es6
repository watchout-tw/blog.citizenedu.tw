import React from "react";
import AppBar from "../components/AppBar/AppBar.es6";
import IndexList from "../components/IndexList/IndexList.es6";

export default React.createClass({
  displayName: "Home",

  render() {
    return (
        <div className="app">
            <AppBar type="nav"/>
            <div id="indexList-root"></div>
        </div>
    );
  }
});

import React from "react";
import "./AppBar.css";

export default React.createClass({
  displayName: "AppBar",

  render() {

      var result = <div></div>;
      var type = this.props.type;

      if(type === "simple"){
      	result = (
      	  <div className="AppBar">
            <a href="/"
               className="AppBar-logo">沃草公民學院</a>
          </div>
        );

      }else if(type === "nav"){
      	result = (
      	  <div className="AppBar">
            <a href="/"
               className="AppBar-logo">沃草公民學院</a>
            <a href="/"
               className="AppBar-nav">最新</a>
            <a href="/columns"
               className="AppBar-nav">專欄</a>
            <a href="/collections"
               className="AppBar-nav">套餐</a>
            <a href="/cfp"
               className="AppBar-nav">徵稿</a>
          </div>
        );

      }else{
      	//
      }

      return (
        result
      );
  }
});

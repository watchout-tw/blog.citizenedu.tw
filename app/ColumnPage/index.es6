import React from "react";
import AppBar from "../components/AppBar/AppBar.es6";
import AboutSite from "../components/AboutSite/AboutSite.es6";
import Columns from "../components/Columns/Columns.es6";

export default React.createClass({
  displayName: "ColumnPage",

  getInitialState () {
    return {
      count: 0
    };
  },

  render() {

    var result = "";

    if(window.innerWidth > 400){
        result = (
        <div>
            <AppBar type="nav"/>
            <div className="flexWrapper">
              <AboutSite/>
              <Columns type="column"/>
            </div>
        </div>);

    }else{
        result = (
        <div>
            <AppBar type="nav"/>

              <AboutSite/>
              <Columns type="column"/>

        </div>);
    }



    return (
        result
      );
  }
});

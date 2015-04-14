import React from "react";
import AppBar from "../components/AppBar/AppBar.es6";
import AboutSite from "../components/AboutSite/AboutSite.es6";
import List from "../components/List/List.es6";
import Tags from "../components/Tags/Tags.es6";
import Columns from "../components/Columns/Columns.es6";

export default React.createClass({
  displayName: "CollectionPage",


  render() {
    var result = "";

    if(window.innerWidth > 400){
        result = (
        <div>
            <AppBar type="nav"/>
            <div className="flexWrapper">
              <AboutSite />
          <Columns type="collection"/>
            </div>
        </div>);

    }else{
        result = (
        <div>
          <AppBar type="nav"/>
          <AboutSite />
          <Columns type="collection"/>

        </div>);
    }

    return (
        result
    );
  }
});

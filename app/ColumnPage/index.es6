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
        return (
        <div>
            <AppBar type="nav"/>

            <div className="flexWrapper">
              <AboutSite/>
              <Columns type="column" items={this.props.collections.columns} collections={this.props.collections}/>
            </div>

        </div>);
  }
});

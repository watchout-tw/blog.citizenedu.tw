import React from "react";
import "./Columns.css";

import Columns from "./Columns.json";
import Collections from "./Collections.json";
export default React.createClass({
  displayName: "Columns",

  render() {
  	  var data = (this.props.type === "column") ? Columns : Collections;
      var columnItems = data.map((item,key)=>{
          return (
          	  <div className="Column"
                   key={key}>

             	  <div className="Column-header">
                  <div className="Column-name">{item.name}</div>
                  <div className="Column-articleCount">{item.articleCount}</div>

                </div>
             	  <div className="Column-intro">{item.intro}</div>
              </div>
          )
  	  });

      return (
      <div className="Columns">
          {columnItems}
      </div>
      );
  }
});
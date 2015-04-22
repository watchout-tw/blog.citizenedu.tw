import React from "react";
import "./Columns.css";

export default React.createClass({
  displayName: "Columns",

  render() {
      var columnItems = this.props.items.map((item,key)=>{
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

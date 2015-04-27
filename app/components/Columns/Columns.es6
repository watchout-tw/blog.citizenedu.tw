import React from "react";
import "./Columns.css";

export default React.createClass({
  displayName: "Columns",

  render() {
      var columnItems = this.props.items.map((item,key)=>{
          return (
          	  <a className="Column" href={"/" + item.path} key={key}>

             	  <div className="Column-header">
                  <div className="Column-name">{item.title}</div>
                  <div className="Column-articleCount">{this.props.collections[item.title] ? this.props.collections[item.title].length : 0}</div>

                </div>
             	  <div className="Column-intro">{item.contents}</div>
              </a>
          )
  	  });

      return (
      <div className="Columns">
          {columnItems}
      </div>
      );
  }
});

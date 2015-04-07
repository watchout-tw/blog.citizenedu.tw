import React from "react";
import "./AppBar.css";

export default React.createClass({
  displayName: "AppBar",
  
  render() {
      return (
      <div className="AppBar">
          <a href="/"><div className="AppBar-logo">公民學院部落格</div></a>
      </div>
      );
  }
});
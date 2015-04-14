import React from "react";

import AppBar from "../components/AppBar/AppBar.es6";
import Author from "../components/Author/Author.es6";

export default React.createClass({
  displayName: "AuthorPage",

  render() {

    return (
      <div>
        <AppBar type="simple"/>
        <Author type="page" />
      </div>
    );
  }
});

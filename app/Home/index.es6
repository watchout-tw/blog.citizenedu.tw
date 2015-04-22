import React from "react";
import AppBar from "../components/AppBar/AppBar.es6";
import AboutSite from "../components/AboutSite/AboutSite.es6";
import List from "../components/List/List.es6";
import Tags from "../components/Tags/Tags.es6";

export default React.createClass({
  displayName: "Home",

  getInitialState () {
    return {
      tag: ""
    };
  },

  _onChangeTag (i, event){
    console.log(i);
    this.setState({
      tag: i
    });
  },

  render() {

    return (

        <div>
            <AppBar type="nav"/>
            <div className="flexWrapper">
              <AboutSite />
              <List type="index"
                    tag={this.state.tag}
                    posts={this.props.collections.posts}/>
              <Tags changeTagHandler={this._onChangeTag}
                    tag={this.state.tag}/>
            </div>

        </div>

    );
  }
});

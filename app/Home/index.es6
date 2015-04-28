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
    var type = this.props.type,
       index = {};
    if (type && this.props.collections[type]) {
      this.props.collections[type].forEach((key) => {
        index[key.title] = 1;
      });
    }
    var posts = type && index[this.props.title] ? (this.props.collections[this.props.title] || []) : this.props.posts;

    return (

        <div>
            <AppBar type="nav"/>
            <div className="flexWrapper">
              <AboutSite />
              <List type="index"
                    tag={this.state.tag}
                    posts={posts}/>
              <Tags changeTagHandler={this._onChangeTag}
                    items={this.props.collections.subjects.concat(this.props.collections.tags)}
                    tag={this.state.tag}/>
            </div>

        </div>

    );
  }
});

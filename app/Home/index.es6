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

    function timestamp(dateString) {
      return (new Date(dateString)).getTime()
    }
    var posts = (type && index[this.props.title] ? (this.props.collections[this.props.title] || []) : this.props.posts)
      .sort((a, b) => timestamp(b.published_at) - timestamp(a.published_at))

    return (

        <div className="app">
            <AppBar type="nav"/>
            <div className="flexWrapper">
              <AboutSite {...this.props}/>
              <List type="index"
                    tag={this.state.tag}
                    posts={posts} />
              <div className="defaultTags">
                  <div className="defaultTags-fixed">
                  <Tags changeTagHandler={this._onChangeTag}
                    items={this.props.collections.subjects.concat(this.props.collections.tags)}
                    tag={this.state.tag}
                    {...this.props} />
                  </div>
              </div>
            </div>
            <div className="padTags">
                <Tags changeTagHandler={this._onChangeTag}
                      items={this.props.collections.subjects.concat(this.props.collections.tags)}
                      tag={this.state.tag}
                      {...this.props} />

            </div>

        </div>

    );
  }
});

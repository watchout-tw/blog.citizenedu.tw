import React from "react";
import "./AboutSite.css";

export default React.createClass({
  displayName: "AboutSite",

  render() {
      //var classes = (this.props.flex) ? "AboutSite is-flex" : "AboutSite";
      return (
      <div className="AboutSite">
        <img className="AboutSite-img"
             src={this.props.picture || this.props.site.picture} />
        <div className="AboutSite-content">
            <div className="AboutSite-title">{this.props.title || this.props.site.title}</div>
            <div className="AboutSite-info" dangerouslySetInnerHTML={{__html: this.props.contents || this.props.site.description}}></div>
            <a className="AboutSite-meta" href="/posts/974">第一次來？</a>
        </div>
      </div>
      );
  }
});

import React from "react";
import "./AboutSite.css";

export default React.createClass({
  displayName: "AboutSite",

  render() {
      return (
      <div className="AboutSite">
        <figure className="AboutSite-img">
          <img className="AboutSite-imgPicture" src={this.props.picture || this.props.site.picture} />
          <span className="AboutSite-imgCopyright"
            dangerouslySetInnerHTML={{__html: this.props.picture_attr ? "圖／" + this.props.picture_attr : ""}}></span>
        </figure>
        <section className="AboutSite-content">
          <h3 className="AboutSite-title">{this.props.title || this.props.site.title}</h3>
          <div className="AboutSite-info"
            dangerouslySetInnerHTML={{__html: this.props.contents || this.props.site.description}}>
          </div>
          <div className="AboutSite-meta"
            dangerouslySetInnerHTML={{__html: (this.props.contents ? this.props.info : this.props.site.info)}}>
          </div>
        </section>
      </div>
      );
  }
});

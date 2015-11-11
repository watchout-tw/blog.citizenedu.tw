import React from "react";
import "./AboutSite.css";

import AboutSiteData from "./AboutSite.json";

export default React.createClass({
  displayName: "AboutSite",

  render() {
      const site = AboutSiteData.default;
      const {tag, column} = this.props;

      var displayAbout = {
        picture: site.picture,
        picture_attr: "",
        title: site.title,
        info: site.info,
        description: site.description
      }

      if(column && AboutSiteData.columns[column]){
          displayAbout = AboutSiteData.columns[column]
      }
      if(tag){
          displayAbout.title = tag;
      }

      return (
      <div className="AboutSite">    
          <figure className="AboutSite-img">
            <img className="AboutSite-imgPicture" src={displayAbout.picture} />
            <span className="AboutSite-imgCopyright"
              dangerouslySetInnerHTML={{__html: displayAbout.picture_attr ? "圖／" + displayAbout.picture_attr : ""}}></span>
          </figure>
          <section className="AboutSite-content">
            <h3 className="AboutSite-title">{displayAbout.title}</h3>
            <div className="AboutSite-info"
              dangerouslySetInnerHTML={{__html: displayAbout.description}}>
            </div>
            <div className="AboutSite-meta"
              dangerouslySetInnerHTML={{__html: (displayAbout.info)}}>
            </div>
          </section>  
      </div>
      );
  }
});

/*
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
*/

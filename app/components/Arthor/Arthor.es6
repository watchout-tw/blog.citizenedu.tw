import React from "react";
import "./Arthor.css";

//http://community.citizenedu.tw/users/kris/activity
import arthor from "./Arthor.json";;

export default React.createClass({
  displayName: "Arthor",

  render() {
      //console.log(arthor.user.bio_excerpt);
      //console.log(arthor.user.bio_raw);
      return (
      <div className="Arthor">
         <div dangerouslySetInnerHTML={{__html: arthor.user.bio_excerpt}}></div>
         <div className="Arthor-showFullBio">看完整作者介紹</div>
      </div>
      );
  }
});
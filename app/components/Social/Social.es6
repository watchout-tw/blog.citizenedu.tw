import React from "react";
import "./Social.css";


export default React.createClass({
  displayName: "Social",

  getInitialState(){
      return {
          showShare: false
      }
  },
  _onFBShare(){
      var appid = "417086321749673";
      var domain = "http%3A%2F%2Fblog-test.citizenedu.tw";
      var picture = "http://wallpaperu.com/wp-content/uploads/2014/09/cute_cat_wallpaper26.jpg";
      window.location.href = "https://www.facebook.com/dialog/feed?app_id="+appid+"&display=popup&caption=&link="+domain+"&redirect_uri="+domain+"&picture="+picture;

  },
  render() {

      return (
          <div className="Social">
              <div className="Social-socialSets">
                <div className="Social-social"
                     onClick={this.props.goToCommentHandler}>5 討論</div>
                <div className="Social-social"
                     onClick={this._onFBShare}>48 分享</div>
              </div>

          </div>
      );
  }
});
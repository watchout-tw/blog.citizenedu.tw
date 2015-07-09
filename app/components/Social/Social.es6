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
      console.log('woot')
      var appid = "1016443865047062";
      var url = window.location.href;
      window.location.href = "https://www.facebook.com/dialog/feed?app_id="+appid+"&display=popup&caption=&link="+url+"&redirect_uri="+url+"&picture=";
  },
  render() {

      return (
          <div className="Social">
              <div className="Social-socialSets">
                <div className="Social-social"
                     onClick={this.props.goToCommentHandler}>5 討論</div>
                <div className="Social-social"
                     onClick={this._onFBShare}>49 分享</div>
              </div>

          </div>
      );
  }
});

import React from "react";
import Transmit from "react-transmit";
import "./Social.css";
import superagent from "superagent";
import helper from "../../helper";

function postPathToId(path) {
  return path.replace('/posts/', '')
}

const Social = React.createClass({
  displayName: "Social",

  getInitialState(){
      return {
        showShare: false,
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
                     onClick={this.props.goToCommentHandler}>{this.props.disqusPostsCount || 0} 討論</div>
                <div className="Social-social"
                     onClick={this._onFBShare}>{this.props.fbShareCount || 0} 分享</div>
              </div>

          </div>
      );
  }
});

export default Transmit.createContainer(Social, {
  queries: {
    disqusPostsCount: function (param) {
      return superagent
        .get(helper.topicURL(postPathToId(location.pathname), {json: true}))
        .use(helper.withPromise())
        .end()
        .then(function (res) {
          return +res.body.posts_count - 1
        })
    },
    fbShareCount: function (param) {
      return new Promise((r) => r(100))
    }
  }
})

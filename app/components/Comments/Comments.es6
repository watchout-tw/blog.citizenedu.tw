import React from "react/addons";
import "./Comments.css";
import Tabs from "../Tabs/Tabs.es6";

import $ from "jquery";

import superagent from "superagent";
import helper from "../../helper";
import Debug from "debug";

var debug = Debug("component:Comments");

export default React.createClass({
  displayName: "Comments",

  getInitialState(){
      return {
         focusTab: 'all',//all, editorsPick
         max: 3,
         commentData: [],
         expandedCommentId:{},
         path: location.pathname
      }
  },

  _onToggle(choice, event){
      //console.log(choice);
      this.setState({
          focusTab: choice
      });
  },

  _onSetNewMax(){
      this.setState({
          max: this.state.max + 5
      });

  },

  _onReadMore(item, event){

    var current = this.state.expandedCommentId;
    current[item.id] = true;

    this.setState({
        expandedCommentId: current
    });

  },

  getCommentData() {
    superagent
      // XXX posts path
      .get(helper.topicURL(this.state.path.replace('/posts/', '')))
      .use(helper.withPromise())
      .end()
      .then(function (res) {
        this.setState({
          commentData: res.body.post_stream.posts
        })
      })
      .catch(function (err) {
        debug(err)
      })
  },

  // /////////////////// IMAGE URL ISSUE
  componentDidMount() {


      var rect = this.getDOMNode().getBoundingClientRect();
      //console.log(rect.top);

      //this.props.commentMountHandler(rect.top);


      //////////////

      var trimCommentData = [];
      this.state.commentData.map((item, key)=>{

        // Create a dummy DOM element in order to manuplate HTML string
        // Replace image url
        var el = document.createElement( 'div' );
        el.innerHTML = item.cooked;

        // $("img").each(function(index, value){

        //     var check = value.src.indexOf('community.citizenedu.tw');

        //     if(check === -1){
        //         var split = '/images/';
        //         var relativePath = value.src.split('/images/')[1];
        //         if(!relativePath){
        //             split = '/letter_avatar/';
        //             relativePath = value.src.split('/letter_avatar/')[1];
        //         }
        //         value.src = 'http://community.citizenedu.tw' + split + relativePath;
        //         //console.log(value);
        //     }

        // });

        //console.log(item.cooked);
        item.cooked = el.innerHTML;
        trimCommentData.push(item);
    });
    //console.log(trimCommentData);
    this.setState({
        commentData: trimCommentData
    });

    this.getCommentData()
  },
  render() {

      /* ================================
       *   Comments
       * ================================ */
      var { focusTab, max, commentData, expandedCommentId } =  this.state;
      var noComment = true;

      var postsItem = commentData

      .filter((item)=>{
        return (focusTab === 'editorsPick') ? (item.post_type === 2) : item;
      })
      .map((item, key)=>{
          noComment  = false;
          var size = 120;
          var avatarTemplate = item.avatar_template.split('{size}')[0]+"/"+size+"/"+item.avatar_template.split('{size}')[1];
          var imgURL = "http://community.citizenedu.tw"+avatarTemplate;

          var classSet = React.addons.classSet;
          var commentClasses = classSet({
              "Comments-post": true,
              "is-hide": key > this.state.max,
              "is-folded" : !expandedCommentId[item.id]
          });
          var mainClasses = classSet({
              "Comments-main": true,
              "is-folded": !expandedCommentId[item.id]
          });

          var bouncClick = this._onReadMore.bind(null, item);
          var expandButtomItem = (expandedCommentId[item.id]) ?
          "" :  (<div className="Comments-expandButton"
                      onClick= {bouncClick}>Read more</div>);



          /* =====================================
           *  Content
           * ===================================== */

          var regex = /(<([^>]+)>)/ig;


          var commentContentItem = (true) ?
          //var commentContentItem = (expandedCommentId[item.id]) ?
          <div dangerouslySetInnerHTML={{__html: item.cooked}}></div>
            :
          <div>
              <p>{item.cooked.replace(regex, '').substring(0,150)+"..."}</p>
          </div>
          return (
            <div className={commentClasses}
                 key={key}>

                <div className="Comments-left">
                    <img className="Comments-img" src={imgURL} />
                </div>
                <div className={mainClasses}
                     id={"CommentMain"+item.id}>
                    <div className="Comments-author">{item.name}</div>
                    <div className="Comments-date">{"・發表於  "+item.created_at.split('T')[0]}</div>
                    {commentContentItem}
                </div>
                {expandButtomItem}
            </div>
          )
      });


      /* ================================
       *   Show More Button
       * ================================ */
      var showMoreButtonItem = (postsItem.length > max && !noComment) ? (
          <div className="Comments-footer">
              <div className="Comments-button"
                    onClick={this._onSetNewMax}>載入更多</div>
              <a className="Comments-button--hightlight"
                 href={"http://community.citizenedu.tw/t/topic/" + this.state.path.replace('posts/', '')}
                 target="_blank">我要留言</a>
          </div>
      ): (
          <div className="Comments-footer">
              <a className="Comments-button--hightlight"
                 href={"http://community.citizenedu.tw/t/topic/" + this.state.path.replace('posts/', '')}
                 target="_blank">我要留言</a>
          </div>
      );

    var content = (noComment) ? <div className="Comments-noPost">
      現在沒有討論

    </div> : postsItem;

    return (
      <div className="Comments">
         <div className="Comments-content">
            <div className="Comments-header">
              <div className="Comments-title">編輯嚴選留言</div>
            </div>

            {content}
            {showMoreButtonItem}
         </div>
      </div>
    );
  }
});

import React from "react/addons";
import "./Author.css";
import $ from "jquery";
import Tabs from "../Tabs/Tabs.es6";

//http://community.citizenedu.tw/users/kris/activity
import Author from "./Author.json";
//http://community.citizenedu.tw/users/kris/activity/posts
import AuthorPost from "./AuthorPost.json";

export default React.createClass({
  displayName: "Author",

  getInitialState(){
      return {
         scroll: false,
         focusTab: 'article',
         showFullBio: false
      }
  },

  _onToggle(choice, event){
      this.setState({
          focusTab: choice
      });
  },

  _onShowFullBio(){
      this.setState({
          showFullBio: true
      });

  },

  componentDidMount() {
    var ref = this.refs.AuthorWidget;
    if(!ref) return;

    var rect = ref.getDOMNode().getBoundingClientRect();
    var bottom = rect.bottom;
    var scroll = this.state.scroll;

    var _this = this;
    var cb = function(value){
        //console.log("callback:"+value);
        _this.setState({
            scroll: value
        });
    };

    $(window).scroll(function(event){
        // console.log("s"+$(this).scrollTop());
        // console.log(bottom);
        // console.log($(this).scrollTop() < bottom );
        // console.log(scroll);

        if( $(this).scrollTop() > bottom ){
            cb(true);
        }
        if( $(this).scrollTop() < bottom ){

            cb(false);
        }
    });
  },
  render() {
      //console.log(Author.user.bio_excerpt);
      //console.log(Author.user.bio_raw);
      //
      var result = "";
      if(this.props.type === "section"){
          result = (
              <div className="Author">
                 <a href="#/author/1">
                 <div dangerouslySetInnerHTML={{__html: Author.user.bio_excerpt}}></div>
                 <div className="Author-gotoBio">作者個人頁面</div>
                 </a>
              </div>
          )

      }else if(this.props.type === "widget"){
          var classSet = React.addons.classSet;
          var classes = classSet({
              "Author-widget" : true,
              "Author-fixedWidget": this.state.scroll
          });

          result = (
              <div className={classes}
                   ref="AuthorWidget">
                  <img className="Author-widgetAvatar"
                       src="http://okapi.books.com.tw/uploads/article/article10144_3.png" />
                  <div className="Author-widgetInfo">
                      <a className="Author-widgetLink"
                         href="#/author/1">朱家安</a>・<a className="Author-widgetLink">沃草烙哲學</a>
                      <span className="Author-tagsSection">
                          <span className="Author-tags">／</span>
                          <a className="Author-tagLink">哲學</a>
                          <span className="Author-tags">・</span>
                          <a className="Author-tagLink">藝術</a>
                      </span>
                  </div>
              </div>
          )

      }else if(this.props.type === "page"){
          /* ================================
           *   Tabs
           * ================================ */
          var tabs = [{id:'article', title: '文章'},
                      {id:'bio', title: '簡介'}];

          var postItems = AuthorPost.map((item, key)=>{
              return(
                  <a className="Author-articleItem"
                     key={key}
                     href="#/article/1"  >
                       <div className="Author-articleItemDate">{item.date}</div>
                       <div className="Author-articleItemTitle">{item.title}</div>
                  </a>
              )
          });


          var authorBio = (this.state.showFullBio) ?
          <div dangerouslySetInnerHTML={{__html: Author.user.bio_raw}} /> :
          <p>我相信，當我們以<a href="//google.com.tw/search?q=淺白">淺白</a>、易懂、清晰的探討方式進入哲學，避免那些晦澀、神秘、模糊的用詞，哲學思維內含的邏輯和批判能力才能發揮最大效用，協助我們解析論述和議題，察覺錯謬和悖論，在複雜的情境中做出正確的抉擇。</p>;

          // var authorBioBUtton = (this.state.showFullBio) ?
          // "":
          // <div className="Author-showFullBio"
          //      onClick={this._onShowFullBio}>看完整介紹</div>;

          result = (
          <div className="Author--page">
              <div className="Author--pageBio">
                  <div className="Author--pageContent">
                      <div className="Author-pageTop">
                          <img className="Author-pageAvatar"
                            src="http://okapi.books.com.tw/uploads/photo/photo10142.jpg" />
                          <div className="Author-nameTitle">{Author.user.name}</div>
                      </div>
                      <div className="Author-bio">
                          {authorBio}
                      </div>
                  </div>
              </div>
              <div className="Author--pageMain">
                  <div className="Author--pageContent">
                        <div className="Author-articleTitleWrapper">
                          <div className="Author-articleTitle">最新文章</div>
                        </div>
                        <div className="Author-article">
                            {postItems}
                        </div>
                   </div>
              </div>
          </div>
          );

      }else{
        //no op
      }


      return result;
  }
});
import React from "react/addons";

import Author from "../Author/Author.es6";
import List from "../List/List.es6";

import "./Article.css";

//http://community.citizenedu.tw/t/topic/102/10
//http://community.citizenedu.tw/t/topic/767/17

export default React.createClass({
  displayName: "Article",

  getInitialState(){
      return this.props;
  },

  _onGoToComment(){
      //console.log("Comments");
      //var commentNode = document.getElementByClass("Comments");
      //console.log(commentNode);
      window.scrollTo(0, this.state.commentTop);
  },

  _onCommentsMounted(top){
      //console.log("Comments Mounted: "+top);
      this.setState({
         commentTop: top
      });
  },

  render() {
      var size = 120;//size=45,120
      //var avatarTemplate = data.avatar_template.split('{size}')[0]+"/"+size+"/"+article.avatar_template.split('{size}')[1];
      //var imgURL = "http://community.citizenedu.tw"+avatarTemplate;
      var attr = this.props.picture_attr ? "圖／" + this.props.picture_attr : "";
      
      return (
      <div>
          <div className="Article">
            <Author type="widget" {...this.props}/>
            <div className="Article-cover">
                <img className="Article-coverImg"
                     src={this.props.picture || this.props.site.post_picture} />
                <span className="Article-coverCopyright"
                    dangerouslySetInnerHTML={{__html: attr}}></span>
            </div>

            <div id="social-root"></div>


            <div className="Article-content">
              <h1 className="Article-title">{this.state.title}</h1>
              <div dangerouslySetInnerHTML={{__html: this.state.contents}}></div>
            </div>
            <div className="Article-authorBackground">
                <div className="Article-author">
                    <div className="Article-authorHeader">
                      <img className="Article-avatar"
                           src={this.props.avatar.replace('{size}', '120')} />
                      <div className="Article-info">
                          <a className="Article-name" href={"/authors/" + this.props.authorname}>{this.props.author}</a>
                          <div className="Article-date">{this.state.created_at}</div>
                      </div>
                      <Author type="section" {...this.props}/>
                    </div>
                    <a className="Article-cfpLink" href="/posts/938/"><img className="Article-cfpImg" src="/cfp.jpg" /></a>
                </div>
                
            </div>
            <div id="comment-root"></div>
            <List type="article" {...this.props}/>
          </div>
      </div>
      );
  }
});

import React from "react";
import "./Comments.css";

//http://community.citizenedu.tw/t/topic/798/11
import {post_stream} from "./Comments.json";
import $ from "jquery";


export default React.createClass({
  displayName: "Comments",
  
  getInitialState(){
       return {
          focusTab: 'editorsPick',//all
          max: 3,
          commentData: post_stream.posts
       }
  },

  _onToggle(choice, event){
      this.setState({
          focusTab: choice
      });
  },

  _onSetNewMax(){
      this.setState({
          max: this.state.max + 5
      });

  },

  /////////////////// IMAGE URL ISSUE
  componentDidMount() {
      var trimCommentData = [];
      this.state.commentData.map((item, key)=>{
        
        // Create a dummy DOM element in order to manuplate HTML string
        // Replace image url
        var el = document.createElement( 'div' );
        el.innerHTML = item.cooked;

        $("img").each(function(index, value){

            var check = value.src.indexOf('community.citizenedu.tw');
            
            if(check === -1){
                var split = '/images/';
                var relativePath = value.src.split('/images/')[1];
                if(!relativePath){
                    split = '/letter_avatar/';
                    relativePath = value.src.split('/letter_avatar/')[1];
                }
                value.src = 'http://community.citizenedu.tw' + split + relativePath; 
                //console.log(value);
            }
            
        });
        //console.log(item.cooked);
        item.cooked = el.innerHTML;
        trimCommentData.push(item);
    });
    //console.log(trimCommentData);
    this.setState({
        commentData: trimCommentData
    });

  },

  render() {
      
      /* ================================ 
       *   Comments
       * ================================ */
      var { focusTab, max, commentData } =  this.state;
      
      //console.log(commentData);

      var postsItem = commentData

      .filter((item)=>{
        return (focusTab === 'editorsPick') ? (item.post_type === 2) : item;
      })
      .map((item, key)=>{
          var size = 120;
          var avatarTemplate = item.avatar_template.split('{size}')[0]+"/"+size+"/"+item.avatar_template.split('{size}')[1];
          var imgURL = "http://community.citizenedu.tw"+avatarTemplate;
          var classes = (key < this.state.max) ? "Comments-post" : "Comments-post is-hide";
          
          //Create a dummy DOM element in order to manuplate HTML string
          // Replace image url
              // var el = document.createElement( 'div' );
              // el.innerHTML = item.cooked;
      
              // $("img").each(function(index, value){
              //     value.async = true;

              //     var check = value.src.indexOf('community.citizenedu.tw');
                  
              //     if(check === -1){
              //         var split = '/images/';
              //         var relativePath = value.src.split('/images/')[1];
              //         if(!relativePath){
              //             split = '/letter_avatar/';
              //             relativePath = value.src.split('/letter_avatar/')[1];
              //         }
              //         value.src = 'http://community.citizenedu.tw' + split + relativePath; 
              //         console.log(value);
              //     }
                  
              // });
              // //console.log(item.cooked);
              // item.cooked = el.innerHTML;
             
          //------------------------------------------
        
        return (
           <div className={classes}
                key={key}>

                <div className="Comments-left">
                     <img className="Comments-img" src={imgURL} />
                </div>
                <div className="Comments-main">
                     <div className="Comments-author">{item.name}</div> 
                     <div className="Comments-date">{"・發表於  "+item.created_at.split('T')[0]}</div>
                     <div dangerouslySetInnerHTML={{__html: item.cooked}}></div>
                </div>
                <div className="Comments-expandButton">Read more</div>
               
            </div>
        )
      });

      /* ================================ 
       *   Tabs
       * ================================ */
      var tabs = [{id:'editorsPick', title: '編輯嚴選'},
                {id:'all', title: '全部'}];
      var classes = (this.state.focusTab === 'all')? "Comments-tab is-active" : "Comments-tab";
    
      var tabsItem = tabs.map((value, i)=>{
          var classes = (this.state.focusTab === value.id)? "Comments-tab is-active" : "Comments-tab";
          var boundleClick = this._onToggle.bind(null, value.id);
          return (
             <div className={classes}
                  key={i}
                  onClick={boundleClick}>{value.title}</div>
          )
      });

      /* ================================ 
       *   Show More Button
       * ================================ */
      var showMoreButtonItem = (postsItem.length > max) ? (
          <div className="Comments-footer">
              <div className="Comments-button"
                    onClick={this._onSetNewMax}>載入更多</div>
              <div className="Comments-button--hightlight">加入討論</div>
          </div>
      ): (
          <div className="Comments-footer">
              <div className="Comments-button--hightlight">加入討論</div>
          </div>
      );

    return (
      <div className="Comments">
         <div className="Comments-content">
            <div className="Comments-title">討論</div>
            <div className="Comments-tabs">
               {tabsItem}  
            </div>
            {postsItem}
            {showMoreButtonItem}
         </div>
      </div>
    );
  }
});
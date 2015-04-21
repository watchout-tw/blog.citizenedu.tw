import React from "react/addons";
import Tags from "../Tags/Tags.es6";
import $ from "jquery";
import "./List.css";

//http://community.citizenedu.tw/users/kris/activity/posts
import AuthorPost from "./AuthorPost.json";
import NextPost from "./NextPost.json";

export default React.createClass({
  displayName: "List",

  getInitialState(){
       return {
          scroll: false

       }
  },

  componentDidMount() {
    var ref = this.refs.List;
    if(!ref){
      //console.log("No ref");
      return;
    }

    var rect = ref.getDOMNode().getBoundingClientRect();
    var top = rect.top
    var scroll = this.state.scroll;

    var _this = this;
    var cb = function(value){
        //console.log("callback:"+value);
        _this.setState({
            scroll: value
        });
    };

    $(window).scroll(function(event){
         //console.log("s"+$(this).scrollTop());
        // console.log(bottom);
        // console.log($(this).scrollTop() < bottom );
        // console.log(scroll);

        if( $(this).scrollTop() > top){
            cb(true);
        }
        if( $(this).scrollTop() < top){
            cb(false);
        }
    });
  },

  render() {
      var result = <div></div>;
      var type = this.props.type;
      var classSet = React.addons.classSet;

      if(type === "article"){

        // var nextPostItem = <div className="List-nextItem">
        //   <div className="List-nextItemTitle">下一篇文章</div>
        //     <div className="List-nextPost">
        //       <div className="List-nextTitle">{NextPost.title}／朱家安</div>
        //       <div className="List-nextPreview">{ NextPost.brief+"..."}</div>

        //     </div>
        // </div>;

        var postItems = AuthorPost.map((item, key)=>{
            var title = item.author+"："+item.title;
            return(
                <a className="List-articleItem"
                   key={key}
                   href="/article/1"  >
                     <div className="List-articleItemDate">{item.date}</div>
                     <div className="List-articleItemTitle">{title}</div>
                </a>
            )
        });

        result = (
        <div className="List List-article" ref="List">
          <div className="List-content">

              <div className="List-title">其他哲學類的文章</div>
              {postItems}
          </div>
        </div>);

     }else if(type === "index"){
        var postItems = AuthorPost.map((item, key)=>{
            return(
                <a className="List-indexItem"
                   key={key}
                   href="/article/1"  >
                     <div className="List-articleItemTitle List-boldTitle">朱家安：{item.title}</div>
                     <div className="List-articleItemBrief">{item.brief}</div>

                </a>
            )
        });
        var listFilterClasses = classSet({
           "List-filter" : true,
           "is-fixed" : this.state.scroll && window.innerWidth <= 600
        });
        //console.log(this.state.scroll);
        //console.log(listFilterClasses);
        var filterItem =  (this.props.tag) ?
          <div className={listFilterClasses}>
              <div className="List-filterMeta">標籤</div>
              <div className="List-filterTitle">{this.props.tag}</div>
          </div> :"";

        result = (
          <div className="List List--index" ref="List">
              {filterItem}

              <div className="List-indexContent">
                  {postItems}
              </div>

              <div className="List-footer">
                  <div className="List-button">載入更多</div>
              </div>
        </div>);

     }else{

     }


      return result;
  }
});

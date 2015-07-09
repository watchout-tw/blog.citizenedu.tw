import React from "react/addons";
import $ from "jquery";
import "./List.css";

//http://community.citizenedu.tw/users/kris/activity/posts
import AuthorPost from "./AuthorPost.json";

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

  _extract(name){
    var all = {}
    this.props.collections[name].forEach(function (x) {
      all[x.title] = true
    })
    return this.props.collection.filter((c) => all[c])
  },

  render() {
      var result = <div></div>;
      var type = this.props.type;
      var classSet = React.addons.classSet;

      if(type === "article"){
        var subject = this._extract('subjects')[0]

        var posts = this.props.collections[subject] || []
        var postItems = []
        if (posts.length > 0) {
          postItems = posts.map((item, key)=>{
              var title = item.author+"："+item.title;
              return(
                  <a className="List-articleItem"
                     key={key}
                     href={"/" + item.path}>
                       <div className="List-articleItemDate">{item.created_at}</div>
                       <div className="List-articleItemTitle">{title}</div>
                  </a>
              )
          });
        }

        result = (
        <div className="List List-article" ref="List">
          <div className="List-content">

              <div className="List-title">其他{subject || '同類型'}的文章</div>
              {postItems}
          </div>
        </div>);

     }else if(type === "index"){
        var postItems = this.props.posts.slice(0, 5).map((item, key)=>{
            return(
                <a className="List-indexItem"
                   key={key}
                   href={"/" + item.path}>
                     <div className="List-articleItemTitle List-boldTitle">{item.author}：{item.title}</div>
                     <div className="List-articleItemDate">{item.created_at}</div>
                     <div className="List-articleItemColumn">{item.collection.filter((c) => this._getColumns()[c])[0]}</div>
                     <div className="List-articleItemBrief"
                          dangerouslySetInnerHTML={{__html: item.excerpt}}>
                     </div>

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

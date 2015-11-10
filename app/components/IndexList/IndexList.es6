import React from "react/addons";
import posts from "./posts.json";
import request from "superagent";
import "./IndexList.css";

function parseCooked(cooked) {
  console.log(cooked)
  return {
    "author":"",
    "excerpt":""
  }
}
export default React.createClass({
  displayName: "IndexList",

  getInitialState(){
    return {
        displayPostsCount: 10,
        posts: []
    }
  },
  _httpGet(url, columnName){
    request.get(url)
           .end(function(err, res){
              //author: title
              //如果 pre 裡面有作者，就抓作者，不然就抓 username
              //2015-09-17, 專欄

              //preview
              var lists = res.body.topic_list.topics;
              lists.map((value, index)=>{
                  console.log(value)
                 
                  var postURL = `http://community.citizenedu.tw/t/topic/${value.id}.json`;
                  request.get(postURL).end(function(err, res){
                      //console.log(.cooked)
                      var article = res.body.post_stream.posts[0];

                      // item.author
                      // item.published_at
                      // item.title
                      // item.collection
                      // item.excerpt
                      var parsed = parseCooked(article.cooked);

                      var post = {
                        title: value.title,
                        created_at: article.created_at,
                        author: parsed.author,
                        columnName: columnName,
                        excerpt: parsed.excerpt

                      }
                  })
              })
           });
     

    

  },
  _getPosts(){
    console.log("get posts")
    posts.data.map((item, index)=>{
        var link = `${item.link}.json`;
        this._httpGet(link, item.title);

        
    })
  },
  componentDidMount() {

    console.log(">>indexList");
    this._getPosts();
  },
  _loadMore(){
    console.log("loadMore");
  },
  render() {
        var postItems;

        // var postItems = this.props.posts.slice(0, 10).map((item, key)=>{
        //     return(
        //         <a className="List-indexItem"
        //            key={key}
        //            href={"/" + item.path}>
        //              <div className="List-articleItemTitle List-boldTitle">{[].concat(item.author).join('、')}：{item.title}</div>
        //              <div className="List-articleItemDate">{item.published_at || item.created_at}</div>
        //              <div className="List-articleItemColumn">{item.collection.filter((c) => allColumns[c])[0]}</div>
        //              <div className="List-articleItemBrief"
        //                   dangerouslySetInnerHTML={{__html: item.excerpt}}>
        //              </div>

        //         </a>
        //     )
        // });
        var classSet = React.addons.classSet;
        var listFilterClasses = classSet({
           "List-filter" : true,
           "is-fixed" : this.state.scroll && window.innerWidth <= 600
        });
        var filterItem =  (this.props.tag) ?
          <div className={listFilterClasses}>
              <div className="List-filterMeta">標籤</div>
              <div className="List-filterTitle">{this.props.tag}</div>
          </div> :"";

         return (
          <div className="List List--index" ref="List">
              {filterItem}

              <div className="List-indexContent">
                  {postItems}
              </div>
              <div className="List-footer">
                  <div className="List-button"
                       onClick={this._loadMore}>載入更多</div>
              </div>
        </div>);

    
  }
});

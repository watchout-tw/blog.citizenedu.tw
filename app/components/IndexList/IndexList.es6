import React from "react/addons";
import columnList from "./columnList.json";
import request from "superagent";
import moment from "moment"; 

import "./IndexList.css";


export default React.createClass({
  displayName: "IndexList",

  getInitialState(){
    return {
        displayPostsCount: 10,
        posts: []
    }
  },
  _updateStatePosts(formatedPostList){
    let {posts} = this.state;
    formatedPostList.map((value, index)=>{
        posts.push(value);
    });
    //sort by time
    posts.sort((a,b)=>{
      return b.timstamp - a.timstamp;
    })
    this.setState({
        posts: posts
    })
  },
  _parseCooked(article){
    var author;
    var tag;
    
    // TODO: use regular expression....
    var preCode = article.cooked.split('</code></pre>')[0].split('<pre><code>')[1];
    if(preCode){
        /* Author */
        //要考慮多位作者
        if(preCode.indexOf('作者：')!==-1){
            // preCode has author info       
            author = preCode.split('作者：')[1];
            if(author.indexOf('分類：')!==-1){
              author = author.split('分類：')[0];
            }
            
        }else{
            // use discourse name
            author = article.name;
            if(!author){
              //有可能作者 name 是 null，那就改用 username
              author = article.username;
            }
        }
        author = author.replace(/\s/g, '');//remove space
        /* Tag */
        tag = preCode.split('分類：')[1];
    }

    /* excerpt */
    // can be : <blockquote><p>, <p>
    var content;
    if(article.cooked.indexOf('</code></pre>')!==-1){
        content = article.cooked.split('</code></pre>')[1];
    }else{
        content = article.cooked;
    }
    if(content.substring(0,40).indexOf('<blockquote><p>')!==-1){
        //substring(0,40)，因為出現在後面的不要
        content = content.split('</p></blockquote>')[0].split('<blockquote><p>')[1];

    }else{
        content = content.split('</p>')[0].split('<p>')[1];
    }
    content = content.replace(/<(?:.|\n)*?>/gm, '');//plain text
   
    return {
      "author" : author,
      "tag": tag,
      "excerpt" : content
    }
  },
  _httpGetPost(postURL, articleTitle, columnName, postStreamId){
    var parseCooked = this._parseCooked;
    return new Promise((resolve, reject)=>{
        
        request.get(postURL).end((err, res)=>{
            
            var article = res.body.post_stream.posts[0];
            var parsed = parseCooked(article);
            var date = article.created_at.split("T")[0];

            //console.log(articleTitle+":"+postStreamId)
           
            //2015-02-05T07:16:27
            var formatedPost = {
                id: postStreamId,
                title: articleTitle,
                excerpt: parsed.excerpt,

                date: date,
                timstamp: moment(date, "YYYY-MM-DD").unix(),
                
                author: parsed.author,
                columnName: columnName,
                tag: parsed.tag  
            }
            resolve(formatedPost);

        })

    })
  },
  _parsePostFormat(lists, columnName){
    /* Format */
    //{author}: {title}
    //--如果 pre 裡面有作者，就抓作者，不然就抓 username
    //2015-09-17, {專欄名稱}
    //{preview text, first paragraph}

    var httpGetPost = this._httpGetPost;
    var formatPostLists = [];

    return new Promise((resolve, reject)=>{
        lists.map((value, index)=>{
            //console.log(value)
          
            httpGetPost(`http://community.citizenedu.tw/t/topic/${value.id}.json`, 
                         value.title,
                         columnName,
                         value.id).then((formatedPost)=>{
                
                formatPostLists.push(formatedPost);
                if(formatPostLists.length === lists.length){
                    resolve(formatPostLists);
                }
            })
        })
    })
  },
  _saveToList(src, des){
    src.map((value, index)=>{
       des.push(value);          
    })
  },
  _httpGetCategory(url, des, saveToList){
    var httpGetCategory = this._httpGetCategory;
    var base = "http://community.citizenedu.tw";
    var categoryID = url.split("category_id=")[1].split("&")[0];
    var page = url.split("page=")[1];
    //format: http://community.citizenedu.tw/c/37-category.json?page=1

    var completeURL = `${base}/c/${categoryID}-category.json?page=${page}`
    console.log(`=>${completeURL}`)
    
    return new Promise((resolve, reject)=>{

        request.get(completeURL)
               .end((err, res)=>{
                    
                    saveToList(res.body.topic_list.topics, des);
        
                    if(res.body.topic_list.more_topics_url){
                        httpGetCategory(res.body.topic_list.more_topics_url, des);
        
                    }else{
                        resolve(des);

                    }
            
                });
    });
  },

  _getPosts(){
    
    var saveToList = this._saveToList;
    var httpGetCategory = this._httpGetCategory;
    var parsePostFormat = this._parsePostFormat;
    var updateStatePosts = this._updateStatePosts;

    columnList.data.map((item, index)=>{
        console.log(`get posts: ${item.title}`)

        var url = `${item.link}.json`;
        var topics = [];//to save all the topics(posts) in this category
        request.get(url)
               .end(function(err, res){
                  
                  //save first page
                  //shift: 第0篇是專欄介紹不要存
                  var list = res.body.topic_list.topics;
                  list.shift();
                  saveToList(list, topics);
                  
                  if(res.body.topic_list.more_topics_url){
                      //if there is more, handle the rest of it use _httpGet
                      httpGetCategory(res.body.topic_list.more_topics_url, topics, saveToList).then((d)=>{
                            // console.log(item.title+" === has more then one page ===")
                            // console.log(d)

                            //parse result,(lists, 專欄名稱), then => update to state posts
                            parsePostFormat(d, item.title).then((formatedPostList)=>{
                                updateStatePosts(formatedPostList);
                            })

                      });
                  }else{
                      // console.log(item.title+" *** has only 1 page ***")
                      // console.log(topics)

                      //parse result, (lists, 專欄名稱), then => update to state posts
                      parsePostFormat(topics, item.title).then((formatedPostList)=>{
                          updateStatePosts(formatedPostList);
                      })
                  }
                  
               });   
    })
  },
  componentDidMount() {

    console.log(">>indexList");
    this._getPosts();
  },
  _loadMore(){
    console.log("loadMore");
    console.log(this.state.posts)
  },
  render() {
        let {posts} = this.state;
        if(posts.length === 0){
            return <div className="List List--index" ref="List"></div>
        }

        var postItems = posts.map((item, key)=>{
            return(
                <a className="List-indexItem"
                   key={key}
                   href={"/posts/" + item.id}>
                      <div className="List-articleItemTitle List-boldTitle">
                        {item.author}{(item.author) ? "：" : ""}{item.title}
                      </div>
                      <div className="List-articleItemDate">{item.date}</div>
                      <div className="List-articleItemColumn">{item.columnName}</div>
                      <div className="List-articleItemBrief"
                          dangerouslySetInnerHTML={{__html: item.excerpt}}>
                      </div>

                </a>
            )
        });
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

import React from "react/addons";
import $ from "jquery";
import "./List.css";

//http://community.citizenedu.tw/users/kris/activity/posts
import AuthorPost from "./AuthorPost.json";

const allColumns = {
  '巷仔口社會學': true,
  '歷史學柑仔店': true,
  '沃草布告欄': true,
  '沃草烙哲學': true,
  '沃草野台': true,
  '芭樂人類學': true,
  '菜市場政治學': true,
  '觀點懶人包': true,
  '阿草愛讀書': true,
};

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

  _click(){
    console.log("click");
  },

  render() {
     

        return (
          <div className="List List--index" ref="List">
            im the list
            <button onClick={this._click}></button>
          </div>);


        var subject = this._extract('subjects')[0]

        var posts = this.props.collections[subject] || []
        var postItems = []
        if (posts.length > 0) {
          postItems = posts.map((item, key)=>{
              var title = [].concat(item.author).join('、') + "："+item.title;
              return(
                  <a className="List-articleItem"
                     key={key}
                     href={"/" + item.path}>
                       <div className="List-articleItemDate">{item.published_at || item.created_at}</div>
                       <div className="List-articleItemTitle">{title}</div>
                  </a>
              )
          });
        }

        return (
        <div className="List List-article" ref="List">
          <div className="List-content">

              <div className="List-title">其他{subject || '同類型'}的文章</div>
              {postItems}
          </div>
        </div>);

   
  }
});

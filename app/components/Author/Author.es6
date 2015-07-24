import Debug from "debug"
import React from "react/addons";
import "./Author.css";
import $ from "jquery";
import Tabs from "../Tabs/Tabs.es6";

var debug = Debug('component:Author')

export default React.createClass({
  _extract(name){
    var all = {}
    this.props.collections[name].forEach(function (x) {
      all[x.title] = true
    })
    return this.props.collection.filter((c) => all[c])
  },

  renderColumn(){
    var column = this._extract('columns')[0]
    debug('render column %s', column)
    return (
      <a className='Author-widgetLink' href={'/columns/' + column}>{column}</a>
      )
  },
  renderSubjects(){
    debug('render subjects %s', this._extract('subjects'))
    var subjects = this._extract('subjects').map((s) =>
      <a className="Author-tagLink" href={'/subjects/' + s} key={s}>{s}</a>
    )
    return subjects
  },
  renderTags(){
    debug('render tags %s', this._extract('tags'))
    return this._extract('tags').map((t) =>
      <a className="Author-tagLink" href={'/tags/' + t} key={t}>{t}</a>
    )
  },
  _join(items, sep){
    var result = []
    items.forEach(function (x, i) {
      result.push(x)
      if (i < items.length - 1) {
        result.push(sep)
      }
    })
    return result
  },

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
        _this.setState({
            scroll: value
        });
    };

    $(window).scroll(function(event){

        if( $(this).scrollTop() > bottom ){
            cb(true);
        }
        if( $(this).scrollTop() < bottom ){

            cb(false);
        }
    });
  },
  render() {
      var result = "";
      if(this.props.type === "section"){
          var author = this.props.collections.authors.filter((a) => a.path === `authors/${this.props.authorname}`)[0]
          result = (
              <div className="Author">
                 <a href={"/authors/" + this.props.authorname}>
                 <div dangerouslySetInnerHTML={{__html: author.excerpt}}></div>
                 <div className="Author-gotoBio">作者個人頁面</div>
                 </a>
              </div>
          )

      }else if(this.props.type === "widget"){
    // XXX metalsmith reverses arrays in meta
    this.props.collection.reverse()
          var classSet = React.addons.classSet;
          var classes = classSet({
              "Author-widget" : true,
              "Author-fixedWidget": this.state.scroll
          });

          result = (
              <div className={classes}
                   ref="AuthorWidget">
                  <img className="Author-widgetAvatar"
                       src={this.props.avatar.replace('{size}', '120')} />
                  <div className="Author-widgetInfo">
                      <a className="Author-widgetLink"
                         href={"/authors/" + this.props.authorname}>{this.props.author}</a>・<a className="Author-widgetLink">{this.renderColumn()}</a>
                      <span className="Author-tagsSection">
                          <span className="Author-tags">／</span>
                          {this._join(this.renderSubjects().concat(this.renderTags()), <span className="Author-tags">・</span>)}
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

          function timestamp(dateString) {
            return (new Date(dateString)).getTime()
          }
          var postItems = this.props.collections[this.props.path.replace(/.*\//, '')]
            .sort((a, b) => timestamp(b.created_at) - timestamp(a.created_at))
            .map((item, key)=>{
              return(
                  <a className="Author-articleItem"
                     key={key}
                     href={"/" + item.path}  >
                       <div className="Author-articleItemDate">{item.created_at}</div>
                       <div className="Author-articleItemTitle">{item.title}</div>
                  </a>
              )
          });


          debug(this.props)
          var authorBio = <div dangerouslySetInnerHTML={{__html: this.props.contents}} />

          result = (
          <div className="Author--page">
              <div className="Author--pageBio">
                  <div className="Author--pageContent">
                      <div className="Author-pageTop">
                          <img className="Author-pageAvatar"
                            src={this.props.avatar.replace('{size}', '120')} />
                          <div className="Author-nameTitle">{this.props.title}</div>
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

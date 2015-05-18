import React from "react/addons";

import "./Tags.css";

export default React.createClass({
  displayName: "Tags",

  getInitialState(){
       return {

       }
  },

  render() {
      var classSet = React.addons.classSet;
      var tagsItem = this.props.items.map((item, key)=>{
          var tagClasses = classSet({
            "Tags-Tag": true,
            "is-active" : this.props.tag == item.title
          })
          return (
            <a className={tagClasses}
              href={"/" + item.path}
                 key={key}>{item.title}</a>
          )
      });

      return (
        <div className="Tags">
          <div className="Tags-title">熱門標籤</div>
          {tagsItem}
        </div>
      );
  }
});

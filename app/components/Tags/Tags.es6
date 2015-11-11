import React from "react/addons";
import TagsData from "./Tags.json";
import "./Tags.css";

export default React.createClass({
  displayName: "Tags",
  render() {
      const classSet = React.addons.classSet;
      const {changeTagHandler} = this.props;
      var tagsItem = TagsData.map((item, key)=>{
          var tagClasses = classSet({
            "Tags-Tag": true,
            "is-active" : this.props.tag === item.title
          })
          return (
            <div className={tagClasses}
                 onClick={changeTagHandler.bind(null, item.type, item.title)}
                 key={key}>{item.title}</div>
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

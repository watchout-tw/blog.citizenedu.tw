import React from "react/addons";
import "./Tabs.css";

export default React.createClass({
  displayName: "Tabs",

  render() {
      var { activeId, data, onClick } = this.props;

      var tabsItem = data.map((value, i)=>{
          var classes = (activeId === value.id)? "Tabs-tab is-active" : "Tabs-tab";
          var boundleClick = onClick.bind(null, value.id);

          return (
             <div className={classes}
                  key={i}
                  onClick={boundleClick}>{value.title}</div>
          )
      });
      return (
          <div className="Tabs">{tabsItem}</div>
      )
  }
});
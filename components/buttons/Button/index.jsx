import React from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as Antd from "antd";
import "./Button.css";

function Button({ text, icon, style={} }) {
  return (
    <div className="button" style={style}>
      <Antd.Button type="ghost" shape="default" size="large" disabled={false}>
        {icon}
        {text}
      </Antd.Button>
    </div>
  );
}

export default Button;
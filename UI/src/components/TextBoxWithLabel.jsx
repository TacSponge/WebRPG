import React, { Component } from "react";

function TextBoxWithLabel(props) {
  return (
    <div>
      <form>
        <label>{props.labelText}</label>
        <input type="text" onKeyUp={() => props.onChange()} />
      </form>
    </div>
  );
}

export default TextBoxWithLabel;

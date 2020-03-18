import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    return (
      <div className="item-add-form">
        <button
          className="btn btn-info"
          onClick={() => this.props.onItemAdded("test text")}
        >
          add item
        </button>
      </div>
    );
  }
}

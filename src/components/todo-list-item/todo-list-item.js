import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(state => {
      return { done: !state.done };
    });
  };

  onMarkImportant = () => {
    this.setState(state => {
      return { important: !state.important };
    });
  };

  render() {
    let { label, onDeleted, onToggleImportant, onToggleDone } = this.props;

    // let style = {
    //   color: important ? "tomato" : "black",
    //   fontWeight: important ? "bold" : "normal"
    // };

    let { done, important } = this.state;
    let todoList = "todo-list-item";

    if (done === true) {
      todoList += " done";
    }

    if (important) {
      todoList += " important";
    }

    return (
      <span className={todoList}>
        <span
          className="todo-list-item-label"
          // style={style}
          onClick={this.onLabelClick}
        >
          {label}
        </span>
        <div className="wrapIcons">
          <button
            type="button"
            className="btn list-group-item"
            onClick={this.onMarkImportant}
          >
            <i className="fa fa-exclamation" />
          </button>

          <button
            type="button"
            className="btn list-group-item"
            onClick={onDeleted}
          >
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </span>
    );
  }
}

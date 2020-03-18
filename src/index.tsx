import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppHeader from "./components/app-header/app-header";
import Search from "./components/search/search";
import TodoList from "./components/todo-list/todo-list";
import ItemFilter from "./components/item-filter/item-filter";
import ItemAddForm from "./components/item-add-form/item-add-form";
import "./index.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { label: "drink coffee", important: false, id: 1 },
      { label: "make my app", important: false, id: 2 },
      { label: "learn labrery react", important: true, id: 3 },
      { label: "i want know english lengvige", important: true, id: 4 }
    ]
  };

  delItem = id => {
    this.setState(({ todoData }) => {
      let idx = todoData.findIndex(el => el.id === id);
      let newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArr
      };
    });
  };

  addItem = text => {
    let newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    onToggleImportant = id => {
      alert("imp", id);
    };

    onToggleDone = id => {
      alert("done", id);
    };

    this.setState(({ todoData }) => {
      let newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  };

  render() {
    return (
      <div className="wrapApp">
        <AppHeader />
        <div className="top-panel d-flex">
          <Search />
          <ItemFilter />
        </div>

        <TodoList
          todos={this.state.todoData}
          onDeleted={this.delItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

import React, { Component } from "react";
class App extends Component {
  constructor() {
    super();
    console.log("Instantiating");
    this.state = {
      listName: undefined,
      allTodos: [],
      toDo: "",
      time: ""
    };
  }
  componentDidMount() {
    console.log("After the first render");
    let nameEntered = window.prompt("What is the name of the list?");
    console.log("This is what the user entered", nameEntered);
    this.setState({ listName: nameEntered });
  }
  onChangeHandler = event => {
    console.log("New string in input box ", event.target.value);
    this.setState({ toDo: event.target.value });
  };
  onChangeTime = event => {
    this.setState({ time: event.target.value });
  };
  handlerClearer = () => {
    this.setState({ allTodos: [] });
  };
  handlerTitleChanger = () => {
    const nameEntered = window.prompt("What is the new name of the list?");
    this.setState({ listName: nameEntered });
  };
  handlerRemoveFirst = () => {
    this.setState({ allTodos: this.state.allTodos.slice(1) });
  };
  handlerListReverser = () => {
    this.setState({ allTodos: this.state.allTodos.slice().reverse() });
  };
  submitHandler = event => {
    console.log("Form submitted");
    event.preventDefault();
    let newToDo = { toDo: this.state.toDo, time: this.state.time };
    this.setState({
      toDo: "",
      time: "",
      allTodos: this.state.allTodos.concat(newToDo)
    });
  };
  render() {
    console.log("Rendering with state", this.state);
    if (!this.state.listName) {
      return <div> loading ... </div>;
    }
    return (
      <div>
        <h1>{this.state.listName}</h1>
        <ul>
          {this.state.allTodos.map(x => (
            <li>
              {x.toDo}: {x.time}
            </li>
          ))}
        </ul>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            onChange={this.onChangeHandler}
            value={this.state.toDo}
          />
          <input
            type="text"
            onChange={this.onChangeTime}
            value={this.state.time}
          />
          <button type="button" onClick={this.handlerClearer}>
            Clear list
          </button>
          <button type="button" onClick={this.handlerTitleChanger}>
            Change list name
          </button>
          <button type="button" onClick={this.handlerRemoveFirst}>
            Remove first item
          </button>
          <button type="button" onClick={this.handlerListReverser}>
            Reverse list
          </button>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
export default App;

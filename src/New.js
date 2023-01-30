import React from "react";

class bq extends React.Component {
  constructor() {
    super();
    this.state = {
      start: 0
    };
  }
  add = () => {
    this.setState({
      start: this.state.start + 2
    });
  };
  Square = () => {
    this.setState({
      start: this.state.start * this.state.start
    });
  };
  Doubble = () => {
    this.setState({
      start: this.state.start * 2
    });
  };
  ModuloBy10 = () => {
    if (this.state.start < 10) {
      return;
    }
    this.setState({
      start: this.state.start % 10
    });
  };
  DivideBy2 = () => {
    if (this.state.start < 2) {
      return;
    }
    this.setState({
      start: this.state.start / 2
    });
  };
  Subtrect2 = () => {
    if (this.state.start < 2) {
      return;
    }
    this.setState({
      start: this.state.start - 2
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.start}</h1>
        <input class="inp" type="button" onClick={this.add} value="Add2!" />
        <input
          class="inp"
          type="button"
          onClick={this.Square}
          value="Square!"
        />
        <input
          class="inp"
          type="button"
          onClick={this.Doubble}
          value="Doubble!"
        />
        <input
          class="inp"
          type="button"
          onClick={this.ModuloBy10}
          value="ModuloBy10!"
        />
        <input
          class="inp"
          type="button"
          onClick={this.DivideBy2}
          value="DivideBy2!"
        />
        <input
          class="inp"
          type="button"
          onClick={this.Subtrect2}
          value="Subtrect2!"
        />
        <hr />
        <div>
          <strong>Discription - </strong>This Calculator is totaly made using
          React having onClick functionality to perform various operations like
          add 2, Squire of number, Doubble, ModuloBy10(cannot repeate no.) ,
          Subtract of number by 2 here we totally use react constructor and
          access thir objects by this.state keyword the set the new assign value
          using "setState" try it this will be fun.
        </div>
        <p>Here we can say state is a storage facilator</p>
      </div>
    );
  }
}

export default bq;

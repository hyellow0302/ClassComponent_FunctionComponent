import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <div className="container">
      <h1>function style component VS class sytle component</h1>
      <FuntionComponent initNumber={2} />
      <ClassComponent initNumber={2} />
    </div>
  );
}

function FuntionComponent(props) {
  const [number, setNumber] = useState(props.initNumber);
  const [date, setDate] = useState(new Date().toString());

  return (
    <div className="container">
      <h1>function style</h1>
      <p>Number: {number}</p>
      <p>Date: {date}</p>
      <input
        type="button"
        value="random"
        onClick={() => {
          setNumber(Math.random());
        }}
      />
      <input
        type="button"
        value="date"
        onClick={() => {
          setDate(new Date().toString());
        }}
      />
    </div>
  );
}

class ClassComponent extends React.Component {
  // number값이 변경될 때마다 render가 다시 실행 됨
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.initNumber,
      date: new Date().toString(),
    };
  }

  render() {
    return (
      <div className="container">
        <h1>class style</h1>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input
          type="button"
          value="random"
          onClick={function () {
            this.setState({ number: Math.random() });
          }.bind(this)}
        />
        <input
          type="button"
          value="date"
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}
        />
      </div>
    );
  }
}
export default App;

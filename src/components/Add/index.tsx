import React from "react";
import './style.scss'

interface MyProps {}
interface MyState {
  count: number;
}

export class Add extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  add() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    const { count } = this.state;
    return (
      <div className="add">
        <strong>{count}</strong>
        <button onClick={() => this.add()}>add</button>
      </div>
    );
  }
}

export default Add;

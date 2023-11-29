import { Component } from "react";
import css from "./Counter.module.css";
class Counter extends Component {
  state = {
    counter: 0,
  };
  handelIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));

    // console.log("counter :>> ", this.state.counter);
  };
  handelDecrement = () => {
    if (this.state.counter > 0) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    } else {
      return this.counter;
    }
  };
  render() {
    return (
      <div className={css.container}>
        <div className={css.wrap}>
          <h2 className={css.title}>Counter</h2>
          <p className={css.counter}>{this.state.counter}</p>
        </div>
        <div className={css.buttonBox}>
          <button className={css.increment} onClick={this.handelIncrement}>
            +
          </button>
          <button className={css.decrement} onClick={this.handelDecrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;

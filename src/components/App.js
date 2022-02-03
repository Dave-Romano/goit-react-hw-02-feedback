import React, { Component } from "react";

import Controls from "./controls/Controls";
import Statistic from "./statistic/Statistic";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    negative: 0,
  };

  // increment = (buttonName) => {
  //   this.setState((prevState) => {
  //     return { [buttonName]: prevState[buttonName] + 1 };
  //   });
  // };

  // countTotalFeedback = (state) => {
  //   const sum = this.good + this.neutral + this.negative;
  //   return { sum };
  // };

  // countPositiveFeedbackPercentage = (state) => {
  //   this.setState((prevState) => {
  //     return {};
  //   });
  // };

  adding = (e) => {
    // console.log(e.target);
    const { name } = e.target;
    this.setState((prevState) => {
      return {
        [name]: (prevState[name] += 1),
        total: this.state.good + this.state.neutral + this.state.negative,
        percent: Math.floor(
          (this.state.good /
            (this.state.good + this.state.neutral + this.state.negative)) *
            100
        ),
      };
    });
  };

  render() {
    const { good, neutral, negative, total = 0, percent = 0 } = this.state;
    return (
      <>
        <Controls onClickAction={this.adding} />
        <Statistic
          good={good}
          neutral={neutral}
          negative={negative}
          total={total}
          percent={percent}
        />
      </>
    );
  }
}

export default App;

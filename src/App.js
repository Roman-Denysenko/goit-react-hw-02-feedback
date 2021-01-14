import React, { Component } from 'react';

import Section from './components/section';
import Buttons from './components/buttons';
import Statistics from './components/statistics';

class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrementGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  onIncrementNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onIncrementBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Number(
      ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0),
    );
    return positiveFeedbackPercentage > 0 ? positiveFeedbackPercentage : 0;
  };

  render() {
    return (
      <section className="container">
        <Section title="Please leave feedback">
          <Buttons
            onIncrementGood={this.onIncrementGood}
            onIncrementNeutral={this.onIncrementNeutral}
            onIncrementBad={this.onIncrementBad}
          />
        </Section>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </section>
    );
  }
}

export default App;

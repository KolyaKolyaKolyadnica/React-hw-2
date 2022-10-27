import { Component } from 'react';

import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './notification/Notification';
import Section from './section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const currentReview = e.target.textContent.toLowerCase();

    this.setState(prevState => ({
      [currentReview]: prevState[currentReview] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const result = (this.state.good * 100) / this.countTotalFeedback();

    return result ? result : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <div style={{ fontSize: 24 }}>Please leave feedback</div>

        <FeedbackOptions
          options={this.leaveFeedback}
          onLeaveFeedback={this.leaveFeedback}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}

        <Section title=""></Section>
      </>
    );
  }
}

export default App;

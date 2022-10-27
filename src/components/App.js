import { Component } from 'react';

import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import possibleFeedback from '../data/possibleFeedback.json';
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
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={possibleFeedback}
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
            <Notification message="There is no feedback" />
          )}
        </Section>

        {/* <FeedbackOptions
          options={possibleFeedback}
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
          <Notification message="There is no feedback" />
        )} */}
      </>
    );
  }
}

export default App;

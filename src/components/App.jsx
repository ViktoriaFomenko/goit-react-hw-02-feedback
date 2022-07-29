import React, { Component } from 'react';
import { Section } from './SectionTitle/SectionTitle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };
  // countTotalFeedback()
  // countPositiveFeedbackPercentage()

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            Newoptions={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
      </>
    );
  }
}

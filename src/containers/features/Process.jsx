import React from 'react';
import Feature from '../../components/feature/Feature';
import './process.css';

const featuresData = [
  {
    title: 'Download the bot',
    text: 'Once you have completed the sign-up process and accepted the terms, you will receive instructions on how to download and install Aether on your device.'
  },
  {
    title: 'Give us your feedback',
    text: 'As an early access user, we value your feedback. Please let us know how you\'re using Aether, any issues you encounter, and any suggestions you have for improvement. Your feedback will help us make Aether even better before its official release.'
  },
  {
    title: 'Stay up-to-date',
    text: 'The development team will be working hard to improve Aether based on your feedback, so make sure to check the website regularly for updates and new features. And, if you have any questions or need assistance, please don\'t hesitate to reach out to our support team.'
  }
];

const Process = () => (
  <div className="aether__features section__padding" id="process">
    <div className="aether__features-heading">
      <h1 className="gradient__text">Be among the first to test drive the revolutionary AI personal assistant, Aether.</h1>
    </div>
    <div className="aether__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Process;
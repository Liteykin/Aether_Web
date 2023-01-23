import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Sign up for Early Access',
    text: 'Sign up for early access: Be one of the first to experience the power of Aether. Sign up for our early access program and be among the first to test our AI personal assistant.',
  },
  {
    title: 'Tell Us About Yourself',
    text: 'After signing up, you\'ll be asked to complete a brief survey. This helps us understand more about you and how you plan to use Aether, so we can improve it to better meet your needs.',
  },
  {
    title: 'Review and accept terms',
    text: 'Before accessing Aether, you\'ll need to review and accept the terms and conditions of the early access program. This includes agreements about how you can use the bot, limitations of its functionality and any non-disclosure agreements.',
  },
  {
    title: 'Download the bot',
    text: 'Once you have completed the sign-up process and accepted the terms, you will receive instructions on how to download and install Aether on your device.'
  },
  {
    title: 'Give us your feedback',
    text: 'As an early access user, we value your feedback. Please let us know how you\'re using Aether, any issues you encounter, and any suggestions you have for improvement. Your feedback will help us make Aether even better before its official release..'
  },
  {
    title: 'Stay up-to-date',
    text: 'The development team will be working hard to improve Aether based on your feedback, so make sure to check the website regularly for updates and new features. And, if you have any questions or need assistance, please don\'t hesitate to reach out to our support team.'
  }
];

const Features = () => (
  <div className="aether__features section__padding" id="features">
    <div className="aether__features-heading">
      <h1 className="gradient__text">Be among the first to test drive the revolutionary AI personal assistant, Aether.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="aether__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
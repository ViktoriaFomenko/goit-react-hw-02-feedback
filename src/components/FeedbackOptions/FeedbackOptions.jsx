// import PropTypes from 'prop-types';
import css from './FeedbackOptions.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <button
      key={option}
      type="button"
      className={css.btn}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

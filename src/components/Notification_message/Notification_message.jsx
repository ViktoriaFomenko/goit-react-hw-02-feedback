import PropTypes from 'prop-types';
import css from './Notification_message.module.css';

export const Notification_message = ({ message }) => {
  return <b className={css.message}>{message}</b>;
};

Notification_message.propTypes = {
  message: PropTypes.string.isRequired,
};

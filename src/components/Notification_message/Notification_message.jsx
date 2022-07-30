// import PropTypes from 'prop-types';
import css from './Notification_message.css';

export const Notification_message = ({ message }) => {
  return <b className={css.message}>{message}</b>;
};

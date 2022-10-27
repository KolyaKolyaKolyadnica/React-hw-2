import PropTypes from 'prop-types';
import style from './Notification.module.css';

function Notification({ message }) {
  return <div className={style.text}>{message}</div>;
}
export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};

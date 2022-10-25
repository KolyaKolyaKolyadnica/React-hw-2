import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={style.list}>
      Statistics
      <li className={style.listItem}>Good: {good}</li>
      <li className={style.listItem}>Neutral: {neutral}</li>
      <li className={style.listItem}>Bad: {bad}</li>
      <li className={style.listItem}>Total: {total}</li>
      <li className={style.listItem}>
        Positive feedback: {positivePercentage} %
      </li>
    </ul>
  );
}
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};

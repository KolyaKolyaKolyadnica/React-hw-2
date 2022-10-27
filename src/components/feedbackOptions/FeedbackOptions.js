import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={style.container}>
      {options.map(option => {
        return (
          <button
            className={style.btn}
            onClick={e => {
              onLeaveFeedback(e);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

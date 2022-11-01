import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  const allFeedbackOptions = options.map(option => {
    return (
      <button
        className={style.btn}
        onClick={e => {
          onLeaveFeedback(e);
        }}
        key={option.id}
      >
        {option.name}
      </button>
    );
  });

  return <div className={style.container}>{allFeedbackOptions}</div>;
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <>
      <div style={{ fontSize: 24 }}>{title}</div>
      {children}
    </>
  );
}
export default Section;

Section.propTypes = {
  title: PropTypes.string,
};

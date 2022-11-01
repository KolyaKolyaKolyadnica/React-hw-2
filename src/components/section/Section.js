import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      <h1 style={{ margin: 0 }}>{title}</h1>
      {children}
    </section>
  );
}
export default Section;

Section.propTypes = {
  title: PropTypes.string,
};

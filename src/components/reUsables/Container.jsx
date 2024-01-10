import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <div className={`max-md:my-2 mx-auto max-w-7xl ${className} xl:my-6`}>
      {children}
    </div>
  );
};

// Props validation
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Container;

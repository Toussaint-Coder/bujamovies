import PropTypes from "prop-types";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`rounded-lg px-4 py-2 bg-assets text-sm font-medium text-white ${className} hover:bg-assets/50`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Props Validation
Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

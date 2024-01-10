import PropTypes from "prop-types";

const FlexCard = ({ className, children }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>{children}</div>
  );
};

// Props Validation
FlexCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.func,
};

export default FlexCard;

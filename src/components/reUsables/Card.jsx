import PropTypes from "prop-types";

const Card = ({ children, className }) => {
  return (
    <>
      <div
        className={`p-2 bg-secondary border-white/15 flex flex-col gap-6 rounded-xl ${className} border border-white/15`}
      >
        {children}
      </div>
    </>
  );
};

// Props Validation
Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Card;

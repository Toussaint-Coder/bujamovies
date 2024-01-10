import PropTypes from "prop-types";
import Container from "../reUsables/Container";

const Tittle = ({ children }) => {
  return (
    <Container>
      <div className="font-bold text-white text-lg">{children}</div>
    </Container>
  );
};

// Props Validation
Tittle.propTypes = {
  children: PropTypes.string,
};

export default Tittle;

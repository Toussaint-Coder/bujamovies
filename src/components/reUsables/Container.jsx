
const Container = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-7xl ${className} my-6`}>{children}</div>
  );
};

}

export default Container;

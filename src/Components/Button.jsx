const Button = ({ children, width, color, background, border }) => {
    return (
      <button
        className=" bg-blue-500 h-10 text-secondary1 rounded hover:bg-blue-500 "
        style={{
          width: width,
          background: background,
          border: border,
        }}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  
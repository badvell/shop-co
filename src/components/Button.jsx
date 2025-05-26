import './Button.scss';

const Button = ({
  children,
  color,
  colorText,
  border,
  maxWidth,
  width,
  marginTop,
  marginBottom,
  onClick,
}) => {
  const buttonStyle = {
    backgroundColor: color,
    color: colorText,
    border: border,
    maxWidth: maxWidth,
    marginTop: marginTop,
    marginBottom: marginBottom,
    width: width,
  };

  return (
    <button
      type='button'
      className='button button-hover'
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

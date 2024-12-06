import './Button.scss';

const Button = ({
  children,
  color,
  colorText,
  border,
  maxWidth,
  marginBottom,
  onClick,
}) => {
  const buttonStyle = {
    backgroundColor: color,
    color: colorText,
    border: border,
    maxWidth: maxWidth,
    marginBottom: marginBottom,
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

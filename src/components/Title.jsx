import './Title.scss';

const Title = ({
  title,
  marginLeft,
  marginBottom,
  textAlign,
  fontSize,
  maxWidth = false,
}) => {
  return (
    <h2
      className={`title ${maxWidth ? 'max-width' : ''}`}
      style={{
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        textAlign: textAlign,
        fontSize: fontSize,
      }}
    >
      {title}
    </h2>
  );
};

export default Title;

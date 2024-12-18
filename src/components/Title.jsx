import './Title.scss';

const Title = ({ title, marginBottom, textAlign, fontSize }) => {
  return (
    <h2
      className='title'
      style={{
        marginBottom: marginBottom,
        textAlign: textAlign,
        fontSize: fontSize,
      }}
    >
      {title}
    </h2>
  );
};

export default Title;

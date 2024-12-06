import './Title.scss';

const Title = ({ title, marginBottom, textAlign }) => {
  return (
    <h2
      className='title'
      style={{ marginBottom: marginBottom, textAlign: textAlign }}
    >
      {title}
    </h2>
  );
};

export default Title;

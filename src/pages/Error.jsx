import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='error'>
      <h2>Ooops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.statusText || error.message}</p>
      <Link to='/'>Home Page</Link>
    </div>
  );
};

export default Error;

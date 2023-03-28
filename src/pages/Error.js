import { Link } from 'react-router-dom';
import Home from './Home';

const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <p>page not found</p>
      <Link to='/' className='btn'>
        back home
      </Link>
    </section>
  );
};
export default Error;

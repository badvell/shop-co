import CountUp from 'react-countup';

import './Counter.scss';

const Counter = () => {
  return (
    <div className='counter'>
      <div className='counter__numbers'>
        <CountUp
          start={10}
          end={200}
          duration={1.5}
          style={{ fontSize: '32px' }}
        />
        <span>+</span>
        <p className='counter__text'>International Brands</p>
      </div>

      <div className='counter__numbers'>
        <CountUp
          start={1000}
          end={2000}
          duration={1.5}
          style={{ fontSize: '32px' }}
        />
        <span>+</span>
        <p className='counter__text'>High-Quality Products</p>
      </div>

      <div className='counter__numbers'>
        <CountUp
          start={20000}
          end={30000}
          duration={1.5}
          style={{ fontSize: '32px' }}
        />
        <span>+</span>
        <p className='counter__text'>Happy Customers</p>
      </div>
    </div>
  );
};

export default Counter;

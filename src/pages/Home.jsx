import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import Counter from '../components/Counter';
import BrandCarousel from '../components/BrandCarousel';
import ProductCard from '../components/ProductCard';
import Title from '../components/Title';
import CustomerReview from '../components/CustomerReview';

import newArrivals from '../helper/newArrivals';
import topSelling from '../helper/topSelling';
import exploreImage from '../helper/exploreImages';

import './Home.scss';

const Home = ({ onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className='main'>
        <h1 className='main__text'>Find clothes that matches your style</h1>
        <p className='main__subtext'>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Button>Shop Now</Button>
        <Counter />
      </section>

      <section className='brands'>
        <BrandCarousel />
      </section>

      <section className='product' id='product'>
        <Title title='New Arrivals' />
        <ProductCard
          products={newArrivals}
          selectedProduct={selectedProduct}
          onProductClick={handleProductClick}
          onCloseModal={closeModal}
          onAddToCart={onAddToCart}
        />
      </section>

      <section className='selling'>
        <Title title='Top Seling' />
        <ProductCard
          products={topSelling}
          onProductClick={handleProductClick}
        />
      </section>

      <section className='explore'>
        <Title title='Browse by dress style' />
        <div className='explore__wrapper'>
          {exploreImage.map((card) => (
            <Link to={card.page} key={card.title} className='explore__links'>
              <span className='explore__title'>{card.title}</span>
              <img
                src={card.image}
                alt={card.title}
                className={card.className}
              />
            </Link>
          ))}
        </div>
      </section>

      <section className='feedbacks'>
        <CustomerReview />
      </section>
    </>
  );
};

export default Home;

import { useState } from 'react';
import Tabs from './Tabs';
import ProductDetailsAbout from './ProductDetailsAbout';
import ProductDetailsReview from './ProductDetailsReview';
import ProductDetailsFaqs from './ProductDetailsFaqs';
import Title from '../components/Title';
import { suggestions } from '../helper/suggestions';
import ProductCard from './ProductCard';

import './ProductDetailsTabs.scss';

const ProductDetailsTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('reviews');

  return (
    <div className='tab'>
      <div className='tab__tabs'>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className=''>
        {activeTab === 'details' && <ProductDetailsAbout product={product} />}
        {activeTab === 'reviews' && <ProductDetailsReview product={product} />}
        {activeTab === 'faqs' && <ProductDetailsFaqs product={product} />}
      </div>

      <Title title='You might also like' />
      <ProductCard products={suggestions} />
    </div>
  );
};

export default ProductDetailsTabs;

import { faqs } from '../helper/faqs';

import './ProductDetailsFaqs.scss';

const ProductDetailsFaqs = () => {
  return (
    <div className='product-details-container'>
      <h2 className='product-details-text'>FAQs</h2>
      {faqs.map((faq) => (
        <div key={faq.id}>
          <p className='product-details-subtext'>
            <strong>Q: {faq.question}</strong>
          </p>
          <p className='product-details-subtext'>A: {faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetailsFaqs;

import { faqs } from '../helper/faqs';

const ProductDetailsFaqs = () => {
  return (
    <div>
      <h2>FAQs</h2>
      {faqs.map((faq) => (
        <div key={faq.id}>
          <strong>Q: {faq.question}</strong>
          <p>A: {faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductDetailsFaqs;

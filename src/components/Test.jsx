import { useState } from 'react';
import newArrivals from '../helper/newArrivals';
import topSelling from '../helper/topSelling';

const Test = () => {
  const products = [...newArrivals, ...topSelling];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div style={styles.container}>
      {/* Left Side: Thumbnails */}
      <div style={styles.thumbnails}>
        {products.slice(0, 3).map((product) => (
          <img
            key={product.id}
            src={product.img}
            alt={product.title}
            style={{
              ...styles.thumbnailImage,
              border:
                selectedProduct.id === product.id
                  ? '1px solid rgb(0,0,0,.5)'
                  : 'none',
            }}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* Right Side: Large Image */}
      <div style={styles.largeImageContainer}>
        <img
          src={selectedProduct.img}
          alt={selectedProduct.title}
          style={styles.largeImage}
        />
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
  },
  thumbnails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  thumbnailImage: {
    width: '80px',
    height: '80px',
    cursor: 'pointer',
  },
  largeImageContainer: {
    textAlign: 'center',
  },
  largeImage: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
  },
};

export default Test;

import { useState } from 'react';
import { Link } from 'react-router-dom';

import newArrivals from '../helper/newArrivals';
import topSelling from '../helper/topSelling';

import './Search.scss';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const allProducts = [...topSelling, ...newArrivals];

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const filteredProducts = allProducts.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
    );

    setResults(filteredProducts);
  };

  return (
    <form className='search'>
      <input
        type='text'
        placeholder='Search for products...'
        value={query}
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <div
          style={{
            position: 'absolute',
            marginTop: '10px',
            boxShadow: '6px 3px 3px #073b4c',
            padding: '10px',
            maxWidth: '577px',
            width: '100%',
            background: '#fff',
            borderRadius: '5px',
          }}
        >
          <ul style={{ listStyle: 'none' }}>
            {results.map((product) => (
              <li key={product.id}>
                <Link
                  to={{
                    pathname: `/product/${product.id}`,
                    state: product,
                  }}
                  style={{ fontSize: '16px', textDecoration: 'none' }}
                >
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

export default Search;

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import newArrivals from '../helper/newArrivals';
import topSelling from '../helper/topSelling';

import './Search.scss';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const allProducts = [...topSelling, ...newArrivals];
  const inputRef = useRef(null);

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

  const handleSearchClose = () => {
    setQuery('');
    setResults([]);
    setShowMobileSearch(false);
  };

  useEffect(() => {
    if (showMobileSearch) {
      inputRef.current?.focus();
    }
  }, [showMobileSearch]);

  return (
    <>
      <form
        className={`search ${showMobileSearch ? 'search__mobile-active' : ''}`}
      >
        <input
          type='text'
          placeholder='Search for products...'
          value={query}
          onChange={handleSearch}
          ref={inputRef}
        />
        {results.length > 0 && (
          <div className='search__results'>
            <ul className='search__list'>
              {results.map((product) => (
                <li key={product.id}>
                  <Link
                    state={product}
                    to={`/product/${product.id}`}
                    onClick={handleSearchClose}
                    className='search__link'
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>

      <input
        className='search__toggle'
        onClick={() => setShowMobileSearch(true)}
      />

      {showMobileSearch && (
        <div className='search__overlay' onClick={handleSearchClose} />
      )}
    </>
  );
};

export default Search;

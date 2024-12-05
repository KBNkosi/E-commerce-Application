import {useState,useEffect} from 'react';
import { Link, useSearchParams} from 'react-router-dom';
import axios from 'axios';

/**
 * CategoryPage Component
 *
 * Renders a page with products from a given category.
 *
 * @returns {JSX.Element} The JSX element representing the page.
 */
const CategoryPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const searchQuery = searchParams.get('search');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    let url = 'https://dummyjson.com/products';
    
    if (category) {
      url = `https://dummyjson.com/products/category/${category}`;
    } else if (searchQuery) {
      url = `https://dummyjson.com/products/search?q=${searchQuery}`;
    }

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products");
        setLoading(false);
      });
  }, [category, searchQuery]);

  if(loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if(error) {
    return (
      <div className="flex justify-center items-center min-h-screen flex-col">
        <div className="text-red-500 text-xl mb-4">{error}</div>
        <Link to="/" className="text-indigo-500 hover:text-indigo-600">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 capitalize">
        {category ? `Products in ${category}` : 
         searchQuery ? `Search results for "${searchQuery}"` : 
         'All Products'}
      </h1>

      {products.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600 mb-4">No products found</p>
          <Link to="/" className="text-indigo-500 hover:text-indigo-600">
            Return to Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link 
              to={`/products/${product.id}`} 
              key={product.id} 
              className="border p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <img 
                src={product.images[0]} 
                alt={product.title}
                className="w-full h-48 object-cover mb-2 rounded-md"
              />
              <h2 className="text-lg font-bold">{product.title}</h2>

              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="text-yellow-500">★</span>
                <span>{product.rating}</span>
              </div>

              {product.discountPercentage > 0 ? (
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                  <p className="text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-indigo-500 font-bold">
                    ${(product.price-(product.price * product.discountPercentage/100)).toFixed(2)}
                    <span className="text-xs font-light text-red-600 bg-gray-200 p-1 ml-2 rounded-xl">
                      -{product.discountPercentage}%
                    </span>
                  </p>
                </div>
              ) : (
                <p className="text-lg font-bold">
                  ${product.price.toFixed(2)}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage
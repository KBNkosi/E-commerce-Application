import {useState,useEffect} from 'react';
import { useSearchParams} from 'react-router-dom';
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
  const [products, setProducts] = useState([]);
  const[loading,setLoading]=useState(true);
  const[error,setError]=useState(null);


 /* The `useEffect` hook in the provided code snippet is responsible for fetching products from a
 specific category when the `category` value changes. */
  useEffect(()=>{
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((response)=>{
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error)=>{
        console.log("Error fecthing products:",error);
        setError("Failed to load products");
        setLoading(false);
      });
  }, [category]); 


 /* The `if(loading)` block in the code snippet is a conditional check that is used to display a
 loading spinner while the products are being fetched from the API. */
  if(loading){
    return(
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  /* The `if(error)` block in the code snippet is a conditional check that handles the scenario where
  an error occurs during the fetching of products from the API. If an error is encountered, the
  block returns a loading spinner element displayed in the center of the screen to indicate that
  there was a failure in loading the products.  */
  if(error){
    return(
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }


  return (
  /* Render the products grid*/
   <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-8 capitalize">
      Products in {category}
    </h1>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product)=>(
        <div key={product.id} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
           <img 
           src={product.images[0]} 
           alt={product.title}
           className="w-full h-48 object-cover mb-2 rounded-md"
            />
            <h2 className="text-lg font-bold">{product.title}</h2>

            {/*Product Rating */}
            <div className="flex items-center gap-2 text-sm mb-2">
              <span className="text-yellow-500">★</span>
              <span>{product.rating}</span>
            </div>

            {/*Product Price with conditional discount */}
            {product.discountPercentage > 0 ?(
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
            ):(
              <p className="text-lg font-bold">
                ${product.price.toFixed(2)}
              </p>
            )}
        </div>
      ))}
    </div>
   </div>
  );
};

export default CategoryPage
import { Hero,ProductList, CategoryList } from "../sections"
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const HomePage = () => {
  const { total, itemCount } = useCart();

  return (
    <>
      <header>
       <Hero />
     </header>
      <section>
        <ProductList />
      </section>
      <section>
        <CategoryList />
      </section>
      {itemCount > 0 && (
        <Link
         to="/cart"
         className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg fixed bottom-10 right-10 flex items-center space-x-2 shadow-lg"
        >
         <span className="font-bold">${total.toFixed(2)}</span>
         <span className="text-sm">•</span>
         <span>{itemCount} {itemCount === 1 ? 'item' : 'items'}</span>
        </Link>
      )}
    </>
  )
}

export default HomePage
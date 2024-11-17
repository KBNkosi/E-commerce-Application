import { CartProvider } from "./context/CartContext";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <CartProvider>
      <AppRoutes />;
    </CartProvider>
  );
};

export default App;

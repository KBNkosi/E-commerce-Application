import {
  Hero,
  ProductView,
  Subscribe,
  CustomerReview,
  Footer,
} from "./sections";
import { Nav } from "./components/Nav";
import { useState } from "react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-[#F5F7FA]">
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <Hero isMenuOpen={isMenuOpen} />
      </header>
      <section>
        <ProductView />
      </section>
      <section>
        <Subscribe />
      </section>
      <section>
        <CustomerReview />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default App;

import {
  Hero,
  ProductView,
  Category,
  FooterComponent,
} from "./sections";
import { useState, useEffect } from "react";


const App = () => {
 
 

  return (
    <>
     <header>
       <Hero />
     </header>
      <section>
        <ProductView />
      </section>
      <section>
        <Category />
      </section>
      <section>
        <FooterComponent />
      </section>
    </>
  );
};

export default App;

import {
  Hero,
  ProductView,
  Category,
  FooterComponent,
} from "./sections";


const App = () => {
  
  return (
    <>
     
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

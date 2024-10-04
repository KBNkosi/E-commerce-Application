import { Hero, ProductView, BestSeller, Subscribe, CustomerReview, Footer } from './sections'
import { Nav } from './components/Nav'

const App = () => {
  return (
    <>
      <Nav/>
      <section>
        <Hero/>
      </section>
      <section>
        <ProductView/>
      </section>
      <section>
        <BestSeller/>
      </section>
      <section>
        <Subscribe/>
      </section>
      <section>
        <CustomerReview/>
      </section>
      <section>
        <Footer/>
      </section>
    </>
  )
}

export default App
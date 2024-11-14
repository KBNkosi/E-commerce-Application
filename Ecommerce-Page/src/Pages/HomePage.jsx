import { Hero,ProductList, CategoryList } from "../sections"

const HomePage = () => {
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
    </>
    
  )
}

export default HomePage
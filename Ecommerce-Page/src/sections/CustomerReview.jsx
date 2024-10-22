import ClientCard from "../components/ClientCard"

const CustomerReview = () => {
  return (
   <>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">What Our Customers Say?</h1>
            </div>
            <div>
                <ClientCard />
            </div>
        </div>
    </section>
   </>
  )
}

export default CustomerReview
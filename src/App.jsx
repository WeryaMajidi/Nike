import Nav from "./Components/Nav";
import Hero from "./Sections/Hero";
import PopularProducts from "./Sections/PopularProducts";
import SuperQuality from "./Sections/SuperQuality";
import Services from "./Sections/Services";
import SpecialOffer from "./Sections/SpecialOffer";
import CustomerReviews from "./Sections/CustomerReviews";
import Subscribe from "./Sections/Subscribe";
import Footer from "./Sections/Footer";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 xl:padding-l wide:padding-r padding-b">
        {/* <section className="xl:padding-1  padding-b"> */}
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;

import { Navbar } from "./components/Navbar.jsx"
import { Hero } from "./components/hero.jsx"
import  TrustedPartnersSection  from "./components/TrustedPartnersSections.jsx"
import FeaturesSection from "./components/FeaturesSection.jsx";
import  FeaturedProperties from "./components/PropertyCard.jsx"
import Testimonials from "./components/Testimonials.jsx";
import footer from "./components/footer.jsx"

function App() {
 
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main>
        <section>
          <Hero />
        </section>

        <section>
          <TrustedPartnersSection />
          <FeaturedProperties />
          <FeaturesSection />
          <Testimonials />
       
        </section>
      </main>
    </>
  );
}

export default App

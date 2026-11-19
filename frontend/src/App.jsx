
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/hero.jsx";
import TrustedPartnersSection from "./components/TrustedPartnersSections.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import FeaturedProperties from "./components/PropertyCard.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Home_Footer from "./components/footer.jsx";
import AboutPage from "./components/about.jsx";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section>
                  <Hero />
                </section>

                <section>
                  <TrustedPartnersSection />
                  <FeaturedProperties />
                  <FeaturesSection />
                  <Testimonials />
                </section>
              </>
            }
          />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <footer>
        <Home_Footer />
      </footer>
    </>
  );
}

export default App;

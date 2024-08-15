import { lazy } from "react";

const AboutSection = lazy(() => import("src/modules/About"));
const BannerSection = lazy(() => import("src/modules/Banner"));
const ContactSection = lazy(() => import("src/modules/Contact"));
const PriceSection = lazy(() => import("src/modules/Price"));

import Header from "src/layouts/Header";

const App = () => (
  <>
    <Header />
    <main>
      <BannerSection />
      <AboutSection />
      <PriceSection />
      <ContactSection />
    </main>
  </>
);

export default App;

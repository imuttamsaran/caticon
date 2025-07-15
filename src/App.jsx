import Navbar from "./components/Navbar";
import IconGallery from "./components/IconGallery";
import Footer from "./components/Footer"; 
import Hero from "./components/Hero";

import './index.css';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <main>
        <IconGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;

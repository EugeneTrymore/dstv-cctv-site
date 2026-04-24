// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Gallery from "./pages/Gallery";
import { motion } from "framer-motion";

function App() {
  return (
    <Router>
      <Navbar />
      <WhatsAppButton />

      <Routes>
  <Route path="/" element={<motion.div initial={{opacity:0}} animate={{opacity:1}}><Home /></motion.div>} />
  <Route path="/services" element={<motion.div initial={{opacity:0}} animate={{opacity:1}}><Services /></motion.div>} />
  <Route path="/about" element={<motion.div initial={{opacity:0}} animate={{opacity:1}}><About /></motion.div>} />
  <Route path="/contact" element={<motion.div initial={{opacity:0}} animate={{opacity:1}}><Contact /></motion.div>} />
  <Route path="/thank-you" element={<motion.div initial={{opacity:0}} animate={{opacity:1}}><ThankYou /></motion.div>} />
  <Route path="/gallery" element={<motion.div initial={{opacity:0}} animate={{opacity:1}}><Gallery /></motion.div>} />
</Routes>
        
      

      <Footer />
    </Router>
  );
}

export default App;

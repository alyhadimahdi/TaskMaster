import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="relative flex min-h-screen flex-col overflow-hidden text-slate-800">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-300/10 blur-3xl" />

        <Navbar />
        <main className="relative z-10 flex-1 mesh-bg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

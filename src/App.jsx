import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './content/Navbar';
import Home from './content/Home';
import About from './content/About';
import Contact from './content/Contact';
import Maincont from './content/Maincont'
import Cards from './content/Cards'
import Product1 from "/images/Product1.png"
import Product2 from "/images/Product2.png"
import Footer from './content/footer';

function App() {

  return (
    <>
      {/* React Router to handle navigation */}
      <Router>
        {/* Navbar remains constant across all pages */}
        <Navbar />
        <Routes>
          {/* Define routes for pages */}
          <Route path="/" element={
            <>
              <Home />
              {/* Main Content and Cards are specific to Home Page */}
              <Maincont />
      <h2>Shop By Category</h2>
      <div className="products">
        <Cards  img = {Product1}  title="Product 1" price="Price: $10.00" />
        <Cards  img = {Product2} title="Product 2" price="Price: $20.00" />
        </div>
        </>
          } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App

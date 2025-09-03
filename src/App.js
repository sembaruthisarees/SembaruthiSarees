import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import bg from "./images/others/bg(1).jpg";
import { LandingPage } from './LandingPage';
import SareeDisplay from './SareeDisplay';
import Cart from './Cart';
import LatestDesigns from './LatestDesigns';
import Footer from './Footer';
import Header from './Header';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/" element={
              <div>
                <LandingPage />
                <LatestDesigns />
              </div>
            } 
          />
          <Route path="/collections/:itemId" element={<SareeDisplay />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import bg from "./images/others/bg(1).jpg";
import { LandingPage } from './Components/LandingPage';
import Cart from './Components/Cart';
import LatestDesigns from './Components/LatestDesigns';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Collections from './Components/Collections';
import DataProvider from './Utilities/DataProvider';
function App() {
  return (
    <Router>
      <DataProvider>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={
                <div>
                  <LandingPage />
                  <LatestDesigns />
                </div>
              }
            />
            <Route path="/collections" element={<Collections />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </DataProvider>
    </Router>
  );
}
export default App;

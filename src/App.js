import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';


import { LandingPage } from './LandingPage';
import SareeDisplay from './SareeDisplay';
import Cart from './Cart';
import LatestDesigns from './LatestDesigns';
import Footer from './Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<div><LandingPage/><LatestDesigns/>
        </div>}></Route>
        <Route path='/collections/:itemId' element={<SareeDisplay></SareeDisplay>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>

  );
}

export default App;

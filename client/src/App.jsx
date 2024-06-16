
import {BrowserRouter,Route,Routes}from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Shirt from "./SHIRT PRODUCT/shirtproduct/Shirt.jsx"
import Homeshirt from "./pages/homeshirt/homeshirt.jsx"
import Trendingshirt from "./SHIRT PRODUCT/Trendingshirt/Trendingshirt.jsx";
import Shirtscollections from "./SHIRT PRODUCT/Shirtcollections/Shirtscollections.jsx";
import Entry from "./pages/Entry.jsx";
import Shirtflashsale from "./SHIRT PRODUCT/Shirtflashsale/Shirtflashsale.jsx";
import FooterShirts from "./SHIRT PRODUCT/Trendingshirt/FooterShirts/FooterShirts.jsx";
import Footer from "./pages/Footer/Footer.jsx";
import Poloshirts from "./SHIRT PRODUCT/Shirtcollections/POLOSHIRTS/Poloshirts.jsx";
import Oversizedshirt from "./SHIRT PRODUCT/Shirtcollections/Oversizedshirts.jsx/Oversizedshirt.jsx";
import Tshirts from "./SHIRT PRODUCT/Shirtcollections/Tshirts/Tshirts.jsx";
import Animishirts from "./SHIRT PRODUCT/Shirtcollections/Animishirts/Animishirts.jsx";

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Entry/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/shirthome" element={<Homeshirt/>}/>
      <Route path="/trendingshirts" element={<Trendingshirt/>}/>
      <Route path="/shirtcollections" element={<Shirtscollections/>}/>
      <Route path="/shirtflashsale" element={<Shirtflashsale/>}/>
      <Route path="/footershirt" element={<FooterShirts/>}/>
      <Route path='/getallshirts' element={<Shirt/>}/>
      
      {/* shirt collections */}

      <Route path="/poloshirts" element={<Poloshirts/>}/>
      <Route path="/Oversizedshirt" element={<Oversizedshirt/>}/>
      <Route path="/tshirt" element={<Tshirts/>}/>
      <Route path="/animishirts" element={<Animishirts/>}/>
      
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import Navbar from "../../Navbar/Navbar"
import Carousel from 'react-bootstrap/Carousel';
import Image from "../../assets/images/nikeheadershoes.jpg"
import "./shirthome.css"
import Trendingshirt from '../../SHIRT PRODUCT/Trendingshirt/Trendingshirt';
import Shirtscollections from '../../SHIRT PRODUCT/Shirtcollections/Shirtscollections';
import Shirtflashsale from '../../SHIRT PRODUCT/Shirtflashsale/Shirtflashsale';
import FooterShirts from '../../SHIRT PRODUCT/Trendingshirt/FooterShirts/FooterShirts';
import Footer from '../Footer/Footer';

function NoUncontrolledExample() {
  return (
    <>
    <Navbar/>

    <Carousel>
      <Carousel.Item>
        <img
        id='corol'
          className="d-block w-100 "
          src={Image} 
          alt="First slide"
        />
        <Carousel.Caption>
          <button className='sub-title'>SHOP</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Trendingshirt/>
    
    <Shirtscollections/>

    <Shirtflashsale/>

    <FooterShirts/>
    <Footer/>
    </>
    
  );
}

export default NoUncontrolledExample;
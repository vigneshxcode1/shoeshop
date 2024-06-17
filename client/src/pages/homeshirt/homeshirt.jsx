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
import { Link } from 'react-router-dom';

function NoUncontrolledExample() {
  return (
    <>
    <Navbar/>

    <Carousel>
      <Carousel.Item>
      <Link to={"/getallshirts"} className='sub-title'>
        <img
        id='corol'
          className="d-block w-100 "
          src={Image} 
          alt="First slide"
        />
        </Link>
        <Carousel.Caption>
          <Link to={"/getallshirts"} className='sub-title'>SHOP</Link>
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
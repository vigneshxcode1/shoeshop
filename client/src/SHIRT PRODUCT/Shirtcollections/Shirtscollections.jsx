import React from "react";
import poloshirt from '../../assets/images/trendingshirt3.jpg';
import "./shirtcollections.css";
import { Link } from "react-router-dom";

const Shirtscollections = () => {
  return (
    <div>
      <h1 className="title-1">New Collections Shirts</h1>
      <div className="collection-container">
        <div className="collection">
          <div className="main-1">
            <Link to={"/poloshirts"} className="poloshirts" >
            <img className="collectionimg2" src={poloshirt} alt="Polo Shirt" />
            <h1 >polo shirts</h1>
            <button className="showmorebtn-1">Show More</button>
            </Link>
            
          </div>
        </div>
        <div className="collection">
          <div className="main-2">
          <Link to={"/Oversizedshirt"} className="poloshirts" >
            <img className="collectionimg2" src={poloshirt} alt="Oversized Shirt" />
            <h1>oversized</h1>
            <button className="showmorebtn-1">Show More</button>
            </Link>
          </div>
        </div>
        <div className="collection">
          <div className="main-3">
          <Link to={"/tshirt"} className="poloshirts" >
            <img className="collectionimg2" src={poloshirt} alt="T-Shirt" />
            <h1>Tshirts</h1>
            <button className="showmorebtn-1">Show More</button>
            </Link>
          </div>
        </div>
        <div className="collection">
          <div className="main-4">
          <Link to={"/animishirts"} className="poloshirts" >
            <img className="collectionimg2" src={poloshirt} alt="Animi Shirt" />
            <h1>animi shirts</h1>
            <button className="showmorebtn-1">Show More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shirtscollections;

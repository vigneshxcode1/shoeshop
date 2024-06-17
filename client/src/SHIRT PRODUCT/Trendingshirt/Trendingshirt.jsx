import React, { useEffect, useState } from "react";
import trendingshirt1 from "../../assets/images/trendingshirt1.jpg";
import trendingshirt2 from "../../assets/images/trendingshirts2.jpg";
import "./trendingshirt.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:8000";

// Dummy images for fallback
const productsimg = [
  { id: 1, image: trendingshirt1 },
  { id: 2, image: trendingshirt2 },
  { id: 3, image: trendingshirt1 },
  { id: 4, image: trendingshirt2 },
  { id: 5, image: trendingshirt1 },
  { id: 6, image: trendingshirt2 },
  { id: 7, image: trendingshirt1 },
];

const Trendingshirt = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/v1/getshirts`);
        console.log(res);
        
        const sortedProducts = res.data.product.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });

        const firsteightProducts = sortedProducts.slice(0, 8);
        setProducts(firsteightProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1 className="title-1">New Trending Shirts</h1>
      <Link to={"/getallshirts"}>
        <span className="showmore">show more</span>
      </Link>
      <div>
        <div className="img-main">
          {products.map((product, index) => (
            <div className="products" key={product._id}>
              {product.images && product.images.length > 0 ? (
                <img
                  className="stackimg"
                  onClick={() => navigate(`/products/${product._id}`)}
                  src={product.images[0]}
                  alt={product.productName}
                />
              ) : (
                <img
                  className="stackimg"
                  onClick={() => navigate(`/products/${product._id}`)}
                  src={productsimg[index % productsimg.length].image}
                  alt="Fallback image"
                />
              )}
              <p className="title-oversized">{product.productName}</p>
              <p className="title-oversized">RS: {product.price}</p>
            </div>
          ))}
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Trendingshirt;

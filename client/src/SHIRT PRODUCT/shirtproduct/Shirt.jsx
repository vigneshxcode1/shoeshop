
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./shirt.css"

const BASE_URL = "http://localhost:8000";

function getallshirt() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const res = await axios.get(`${BASE_URL}/api/v1/getshirts`);

        const sortedProducts = res.data.product.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });

        // const firstFourProducts = sortedProducts.slice(0, 4);
        // setProducts(firstFourProducts);
        setProducts(sortedProducts)
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
       <img className="loading" src={loading}></img>
       <p className="loading">Loading....</p>
      </>
   
    
    )
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
<>

<br></br>
<div className="containers-getallshirts">
        <div className="main-box-getallshirts">
          <h2 className="title-getallshirts">shirt collections</h2>
          <br></br>
          {products.map((product) => (
            <div className="productsgetallshirts" key={product._id}>
              {product.images && product.images.length > 0 ? (
                <img
                  className="img-productsgetallshirts"
                  onClick={() => navigate(`/products/${product._id}`)}
                  src={product.images[0]} 
                
                  alt={`${product.productName} first image`}
                />
              ) : (
                <p>No images available</p>
              )}
              <p className="title-oversizedgetallshirts">{product.productName}</p>
              <p className="title-getallshirts">From at RS:{product.price}</p>
            </div>
          ))}
        </div>
      </div>
</>
 
   
  );
}

export default getallshirt

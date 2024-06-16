import React from "react";
import trendingshirt1 from "../../../assets/images/trendingshirts2.jpg";
import trendingshirt2 from "../../../assets/images/trendingshirts2.jpg";
import "./footershirt.css";
import { Link, useNavigate } from "react-router-dom";

const products = [
  { Number: 1, images: trendingshirt1 },
  { Number: 2, images: trendingshirt2 },
  { Number: 4, images: trendingshirt1 },
  { Number: 5, images: trendingshirt2 },
  { Number: 6, images: trendingshirt1 },
  { Number: 7, images: trendingshirt2 },
  { Number: 8, images: trendingshirt1 },
];

const FooterShirts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//         try {

//             const res = await axios.get(`${BASE_URL}/api/v1/getshirts`);
    
//             const sortedProducts = res.data.product.sort((a, b) => {
//               const dateA = new Date(a.createdAt);
//               const dateB = new Date(b.createdAt);
//               return dateB - dateA;
//             });
    
//             const firstFourProducts = sortedProducts.slice(0, 4);
//             setProducts(firstFourProducts);
//           } catch (err) {
//             console.error("Error fetching products:", err);
//             setError("Failed to load products. Please try again later.");
//           } finally {
//             setLoading(false);
//           }
//         };
//     fetchProducts();
//   }, []);
  return (
    <div>
      <h1 className="title-1">New Arrival Shirts </h1>
     <Link to={"/getallshirts"}><span className="showmore">show more</span></Link> 
      <div>
        <div className="img-main">
           
          {products.map((product) => (
            <div className="products" key={product._id}>
              {product.images && product.images.length > 0 ? (
                <img
                  className="stackimg"
                  onClick={() => navigate(`/products/${product._id}`)}
                  //   src={product.images[0]}
                  src={product.images}
                  alt={`${product.name} first image`}
                />
              ) : (
                <p>No images available</p>
              )}
              <p className="title-oversized">shoes1{product.name}</p>
              <p className="title-oversized"> RS:{product.price}</p>
            </div>
          ))}
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default FooterShirts

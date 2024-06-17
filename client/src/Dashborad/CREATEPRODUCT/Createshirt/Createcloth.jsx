import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import axios from "axios";

const BASE_URL = "http://localhost:8000";

const Createcloth = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [cutPrice, setCutPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [seller, setSeller] = useState("");
  const [rating, setRating] = useState("");
  const [sizes, setSizes] = useState("m");
  // const [Images, setImages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = Cookies.get("token");
    if (!token) {
      setError("User not authenticated.");
      return;
    }

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("cutPrice", cutPrice);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("seller", seller);
    formData.append("rating", rating);
    formData.append("sizes", sizes);

    // for (let i = 0; i < Images.length; i++) {
    //   formData.append("images", Images[i]);
    // }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/Createcloth`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response from server:", response);

      toast.success("Successfully created product.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate("/dashbroad");
    } catch (err) {
      console.error("Error creating product:", err);
      toast.error("Failed to create product. Please try again later.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <>
      <Link to="/dashbroad">Dashboard</Link>
      <div className="d-flex justify-content-center align-items-center login">
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Create Products</h2>
            <div className="mb-3">
              <label>Product Name</label>
              <input
                type="text"
                required
                placeholder="Enter product name"
                className="form-control"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <input
                type="text"
                required
                placeholder="Enter product description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Price</label>
              <input
                type="number"
                required
                placeholder="Enter product price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Cut Price</label>
              <input
                type="number"
                required
                placeholder="Enter product cut price"
                className="form-control"
                value={cutPrice}
                onChange={(e) => setCutPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Stock</label>
              <input
                type="number"
                required
                placeholder="Enter product stock"
                className="form-control"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Category</label>
              <select
                className="form-control"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="polo">Polo T-shirt</option>
                <option value="animi">ANIMI T-shirt</option>
                <option value="oversized">Oversized</option>
                <option value="Tshirt">Shirt</option>
              </select>
            </div>
           
            <div className="mb-3">
              <label>Seller</label>
              <input
                type="text"
                required
                placeholder="Enter product seller"
                className="form-control"
                value={seller}
                onChange={(e) => setSeller(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Rating</label>
              <input
                type="number"
                required
                placeholder="Enter product rating"
                className="form-control"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            {/* <div className="mb-3">
              <label>Images</label>
              <input
                type="file"
               
                className="form-control"
                onChange={handleImageChange}
              />
            </div> */}
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Createcloth;

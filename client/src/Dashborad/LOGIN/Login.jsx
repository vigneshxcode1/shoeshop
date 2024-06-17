import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';

const BASE_URL = "http://localhost:8000";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/api/v1/login`, { username, password })
      .then(response => {
        if (response.data.success === "success") {

        // localStorage.setItem("token", response.data.token);
          
        Cookies.set('token', response.data.token, { expires: 30 }); 

          if (response.data.user.role === "admin") {
            navigate("/dashbroad");
          } else if (response.data.user.role === "user") {
            navigate("/");
          } else {
            navigate("/register");
          }
        } else {
          setError(response.data.message);
        }
      })
      .catch(err => {
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Login Portal</h3>
            </div>
            <div className="card-body">
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                {error && <p className="text-danger">{error}</p>}
                <Button variant="primary" type="submit">
                  LOGIN
                </Button>
              </Form>
              <p className="mt-3">Create new account? <Link to="/register">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

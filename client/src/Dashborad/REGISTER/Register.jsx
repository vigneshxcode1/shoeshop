import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const BASE_URL = "http://localhost:8000";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/api/v1/register`, { username, email, password })
      .then(response => {
        console.log(response.data);
        navigate("/");
      })
      .catch(err => {
        if (err.response && err.response.status === 409) {
          setError('User already registered');
        } else {
          setError('Registration failed');
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3>Register</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger" role="alert">{error}</div>}
              <Form onSubmit={handleSubmit}>
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
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
              <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

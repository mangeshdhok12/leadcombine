import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Make sure to create this CSS file

const LeadForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [product, setProduct] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/leads', { email, name, number, product });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="lead-form-container">
      <h1 className="form-title">Lead Form</h1>
      <form onSubmit={handleSubmit} className="lead-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">Number:</label>
          <input
            id="number"
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="product">Working On :</label>
          <select
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
          >
            <option value="">Select Product</option>
            <option value="Product1">Product1</option>
            <option value="Product2">Product2</option>
            <option value="Product3">Product3</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button">Save</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;

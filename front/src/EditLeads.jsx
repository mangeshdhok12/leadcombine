// client/src/components/EditLeads.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams, useNavigate } from 'react-router-dom';
import './App.css'

const EditLeads = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [product, setProduct] = useState();


  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit =  (e) => {
    e.preventDefault();
  
       axios.put('http://localhost:5000/editleads/'+id, {email, name, number, product}).then(res=>{
        if(res.data ==="Success"){
          window.location.href='/'
        }
       }).catch(err=>console.log(err))
    
    } 
   
  useEffect(() => {
   
     
    axios.get('http://localhost:5000/getleadsbyid'+id)
    .then(result=>{
      setEmail(result.data.email)
      setName(result.data.name)
      setNumber(result.data.number)
      setProduct(result.data.product)
    }).catch(err=>console.log(err)) //Fetch all leads
       
 
  }, []);

  const handleDelete = () => {
    axios.delete('http://localhost:5000/deletebyid'+id).then(res=>{
      if(res.data === "lead deleted"){
        navigate('/')
      }
    }).catch(err=>console.log(err))
   
  };




  return (
    <div className="edit-leads-container">
    <h1 className="form-title">Edit Lead</h1>
    <form onSubmit={handleSubmit} className="edit-leads-form">
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
        <label htmlFor="product">Product:</label>
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
        <button type="button" className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </form>
  </div>
  );
};

export default EditLeads;

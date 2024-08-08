import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css'; // Make sure to create this CSS file

const LeadLists = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('name'); // Default sorting by name

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getleads');
        setLeads(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch leads.');
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  // Function to sort leads based on selected criteria
  const sortLeads = (leads, sortBy) => {
    return leads.slice().sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'product') {
        return a.product.localeCompare(b.product);
      }
      return 0;
    });
  };

  const sortedLeads = sortLeads(leads, sortBy);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="lead-list-container">
      <h1 className="heading">All Leads</h1>
      
      {/* Sorting Options */}
      <div className="sorting-controls">
        <label htmlFor="sort-by">Sort By:</label>
        <select
          id="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="product">Product</option>
        </select>
      </div>

      <div className="lead-cards-container">
        {sortedLeads.length > 0 ? (
          sortedLeads.map(lead => (
            <div key={lead._id} className="lead-card">
              <Link to={`/getleadsbyid/${lead._id}`} className="lead-link">
                <div className="lead-details">
                  <h3>{lead.name}</h3>
                  <p>Email: {lead.email}</p>
                  <p>Phone: {lead.number}</p>
                  <p>Working On: {lead.product}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div>No leads available.</div>
        )}
      </div>
    </div>
  );
};

export default LeadLists;

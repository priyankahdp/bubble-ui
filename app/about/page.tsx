"use client";

import { useState } from 'react';

const AboutPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/index');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h1>About Us</h1>
      <button className="btn btn-primary mb-3" onClick={fetchData}>
        VIEW DATA
      </button>
      {loading && <p>Loading the required contents...</p>}
      {data && (
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              {data.fields.map((field) => (
                <th key={field}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Assuming you have an array of items to display */}
            {/* Replace this with actual data if available */}
            <tr>
              <td>1</td>
              <td>Sample Name</td>
              <td>active</td>
              <td>2024-01-01</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AboutPage;
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
      <button className="btn btn-primary mb-3" onClick={fetchData}>
        Load available sprints
      </button>
      {loading && <p>Loading the required contents...</p>}
      {data && (
        <div className="table-responsive" style={{ maxHeight: '300px', overflowY: 'auto' }}>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>State</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Goal</th>
              </tr>
            </thead>
            <tbody>
              {data.values.slice(0, 10).map((sprint) => (
                <tr key={sprint.id}>
                  <td>{sprint.id}</td>
                  <td>{sprint.name}</td>
                  <td>{sprint.state}</td>
                  <td>{new Date(sprint.startDate).toLocaleString()}</td>
                  <td>{new Date(sprint.endDate).toLocaleString()}</td>
                  <td>{sprint.goal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
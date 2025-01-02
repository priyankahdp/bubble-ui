"use client";

import { useState, useEffect } from 'react';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  useEffect(() => {
    if (inputValue) {
      console.log('Input value changed:', inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    if (inputValue2) {
      console.log('Input value changed:', inputValue2);
    }
  }, [inputValue2]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="mb-3 row">
            <p>Please provide your tokens to initiate the release process.</p>
          </div>
          <div className="mb-3 row">
            <label htmlFor="exampleInput" className="col-sm-2 col-form-label">Jira token:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="exampleInput"
                placeholder="Enter text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="exampleInput2" className="col-sm-2 col-form-label">Confluence token:</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="exampleInput2"
                placeholder="Enter text"
                value={inputValue2}
                onChange={(e) => setInputValue2(e.target.value)}
              />
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
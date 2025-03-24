import React, { useState, useEffect } from 'react';
import "./App.css"
const FetchDataExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchData, setFetchData] = useState(false); // State to control fetching

  useEffect(() => {
    if (!fetchData) return; // Only fetch when the button is clicked

    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [fetchData]); // Runs when 'fetchData' state changes

  return (
    <div className="container">
      <h1>Fetch Data</h1>
      <button className="fetch-button" onClick={() => setFetchData(true)}>Fetch Data</button>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error.message}</p>}
      
      {data && (
        <ul className="data-list">
          {data.map((post) => (
            <li key={post.id} className="data-item">{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchDataExample;

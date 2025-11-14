/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */



import { useEffect, useState } from "react";
import Navbar from './Components/Navbar/Navbar';
import React from 'react';

function App() {
  const [disasters, setDisasters] = useState([]);

  // Fetch data when the component loads from mongo db database
  useEffect(() => {
    fetch("http://localhost:5000/api/disasters")
      .then((res) => res.json())
      .then((data) => setDisasters(data))
      .catch((err) => console.error("Error fetching disasters:", err));
  }, []);

  return (
    <div className="p-6">
      {/* Includes the Navbar */}
      <Navbar />
    {/* {} <h1 className="text-2xl font-bold mb-4">🌍 Recent Disasters</h1>*/}
      {/*{disasters.length === 0 ? (
        <p>No disasters found.</p>
      ) : (
        <ul className="space-y-4">
          {disasters.map((d) => (
            <li key={d._id} className="p-4 bg-gray-100 rounded-lg shadow">
              <p><strong>Type:</strong> {d.type}</p>
              <p><strong>Location:</strong> {d.location}</p>
              <p><strong>Severity:</strong> {d.severity}</p>
              <p><strong>Magnitude:</strong> {d.magnitude}</p>
              <p><strong>Date:</strong> {new Date(d.date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      */}
    </div>
  );
} 



export default App;


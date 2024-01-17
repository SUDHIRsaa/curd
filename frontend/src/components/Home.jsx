import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [val, setVal] = useState([]);

  async function getData() {
    const data = await axios.get("http://localhost:4000");
    setVal(data.data);
    console.log(data.data);
  }

  async function handleDelete(id) {
    const del = await axios.delete(`http://localhost:4000/${id}`);
    if (!del) {
      console.log("Error in Deleting");
    } else {
      console.log("Success Deleted");
      getData();
    }
  }

  useEffect(() => {
    getData();
  }, []); 

  return (
    <div className='data' style={{ 
      background: 'linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)',
      padding: "20px",
      minHeight: '100vh',
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1
        style={{
          color: "#fff",
          textTransform: "capitalize",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        User Information
      </h1>
      {val.map((email) => (
        <div key={email._id} style={{ 
          background: "#fff",
          padding: "20px",
          margin: "20px 0",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          width: "50%",
        }}>
          <h2 style={{ marginBottom: "10px", color: "#333" }}>Name: {email.name}</h2>
          <h2 style={{ marginBottom: "10px", color: "#333" }}>Email: {email.email}</h2>
          <h2 style={{ marginBottom: "10px", color: "#333" }}>Password: {email.password}</h2>
          <button style={{ backgroundColor: "#e74c3c", color: "#fff", marginRight: "10px", border: "none", padding: "8px 12px", borderRadius: "5px" }} onClick={() => handleDelete(email._id)}>
            Delete
          </button>
          <Link to={`/update/${email._id}`}>
            <button style={{ backgroundColor: "#2ecc71", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "5px" }}>Update</button>
          </Link>
        </div>
      ))}
    </div>
  );
};



import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://127.0.0.1:5000/api/students/";

function AddStudent() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    marks: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: Number(formData.id),
          name: formData.name,
          age: Number(formData.age),
          marks: Number(formData.marks)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to add student");
      }

      setMessage(data.message);

      setTimeout(() => {
        navigate("/students");
      }, 700);

    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>Add Student</h1>

      <form className="student-form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="id"
          placeholder="Student ID"
          value={formData.id}
          onChange={handleChange}
          required
          min="1"
        />

        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          min="1"
        />

        <input
          type="number"
          name="marks"
          placeholder="Marks"
          value={formData.marks}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="any"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Student"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddStudent;

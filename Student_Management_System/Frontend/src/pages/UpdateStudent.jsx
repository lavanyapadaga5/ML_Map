
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://127.0.0.1:5000/api/students/";

function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    marks: ""
  });

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch selected student
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`${API_URL}${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Student not found");
        }

        setFormData({
          name: data.student.name,
          age: String(data.student.age),
          marks: String(data.student.marks)
        });

      } catch (error) {
        setMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Update student
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          age: Number(formData.age),
          marks: Number(formData.marks)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Update failed");
      }

      navigate("/students");

    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="page">Loading...</div>;
  }

  return (
    <div className="page">
      <h1>Update Student</h1>

      {message && <p>{message}</p>}

      <form className="student-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          disabled
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

        <button type="submit">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default UpdateStudent;

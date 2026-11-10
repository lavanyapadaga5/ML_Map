
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page">
      <h1>Welcome to Student Management System</h1>

      <p>Manage your student records easily.</p>

      <div className="dashboard-cards">
        <Link to="/add-student" className="dashboard-card">
          <h2>Add Student</h2>
          <p>Register a new student.</p>
        </Link>

        <Link to="/students" className="dashboard-card">
          <h2>View Students</h2>
          <p>View and manage student records.</p>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

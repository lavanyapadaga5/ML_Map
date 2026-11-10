

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Management</h2>

      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/add-student">Add Student</Link>
        <Link to="/students">View Students</Link>
      </div>
    </nav>
  );
}

export default Navbar;

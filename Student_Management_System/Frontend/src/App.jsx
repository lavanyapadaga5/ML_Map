
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import ViewStudents from "./pages/ViewStudents";
import UpdateStudent from "./pages/UpdateStudent";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/add-student"
          element={<AddStudent />}
        />

        <Route
          path="/students"
          element={<ViewStudents />}
        />

        <Route
          path="/update-student/:id"
          element={<UpdateStudent />}
        />
      </Routes>
    </>
  );
}

export default App;

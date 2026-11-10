# ML_Map
# Student Management System

A full-stack Student Management System built using **Python Flask, SQLite, React, and Vite**. This application allows users to manage student records through a web interface with separate pages for adding, viewing, updating, and deleting students.

## 1. Project Overview

The Student Management System is designed to understand Python programming concepts, backend development, database operations, REST APIs, and frontend integration through a practical project.

### Features

- Dashboard to navigate the application.
- Add new student records.
- View all registered students.
- View individual student details.
- Update existing student information.
- Delete student records.
- REST API integration between frontend and backend.
- SQLite database for persistent storage.

## 2. Technologies and Frameworks Used

| Category | Technology | Purpose |
|---|---|---|
| Programming Language | Python | Backend development |
| Backend Framework | Flask | Creating REST APIs |
| Frontend Library | React.js | Building the user interface |
| Frontend Tool | Vite | Running the React development server |
| Programming Language | JavaScript | Frontend functionality |
| Database | SQLite | Storing student records |
| API Communication | HTTP / REST API | Connecting frontend and backend |
| Routing | React Router DOM | Navigating between pages |
| Styling | CSS | Designing the application |
| API Testing | Postman | Testing backend APIs |

## 3. Python Concepts Practiced

The following Python concepts are practiced through the backend implementation.

| Python Concept | How It Is Used |
|---|---|
| Variables | Storing student information |
| Data Types | Integer, string, float, and Boolean values |
| Dictionaries | Handling JSON request data |
| Functions | Reusable backend operations |
| Conditional Statements | Validating student information |
| Loops | Iterating through student records |
| Exception Handling | Handling database and application errors |
| Modules and Imports | Separating database and application logic |
| Lists | Working with collections of student records |
| Object-Oriented Programming | Understanding classes and objects through Python exercises |
| Main Execution Guard | Using `if __name__ == "__main__":` |
| Database Connectivity | Connecting Python with SQLite |
| CRUD Operations | Creating, reading, updating, and deleting records |

### Advanced Python Concepts to Implement Next

These are additional learning goals, not features to claim as completed in the current implementation.

- Decorators
- Generators
- Iterators
- Lambda Functions
- List, Dictionary, and Set Comprehensions
- Advanced OOP
- Context Managers
- Python Type Hints

## 4. Frameworks and Libraries Learned

### Flask

Flask is a lightweight Python web framework used to build backend applications and REST APIs.

In this project, Flask is used for:

- Creating API endpoints.
- Handling HTTP requests.
- Processing JSON data.
- Validating student information.
- Returning JSON responses.
- Connecting frontend requests to the database.

### React.js

React is a JavaScript library used to build interactive user interfaces.

In this project, React is used for:

- Creating reusable components.
- Managing form inputs using state.
- Fetching data from backend APIs.
- Displaying student records.
- Handling user interactions.

### React Router DOM

React Router DOM is used for navigation between different pages without reloading the entire application.

Pages include:

- Dashboard
- Add Student
- View Students
- Update Student

### Vite

Vite is a frontend development tool used to start and run the React application.

## 5. Database Concepts Learned

**Database: SQLite**

SQLite is a lightweight relational database that stores data in a local database file.

### Database Operations

| SQL Concept | Purpose |
|---|---|
| CREATE TABLE | Creating the students table |
| INSERT INTO | Adding student records |
| SELECT | Retrieving student records |
| UPDATE | Modifying existing records |
| DELETE | Removing student records |
| PRIMARY KEY | Uniquely identifying each student |
| NOT NULL | Preventing empty required values |
| WHERE | Filtering records using conditions |

### Students Table Structure

| Column | Data Type | Description |
|---|---|---|
| id | INTEGER | Unique student ID |
| name | TEXT | Student name |
| age | INTEGER | Student age |
| marks | REAL | Student marks |

## 6. Project Folder Structure

```text
student-management-system/
│
├── Backend/
│   ├── main.py
│   ├── database.py
│   ├── students.db
│   └── requirements.txt
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── AddStudent.jsx
│   │   │   ├── ViewStudents.jsx
│   │   │   └── UpdateStudent.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── index.html
│
└── README.md
```

*Note: Adjust the folder and file names above if your actual project structure differs.*

## 7. Prerequisites

Install the following before running the project:

- Python 3.10 or above
- Node.js and npm
- Visual Studio Code
- Git (optional)

Check the installed versions:

```powershell
python --version
node --version
npm --version
```

## 8. Backend Setup and Execution

### Step 1: Navigate to the project folder

Open PowerShell:

```powershell
cd C:\Users\HP\student-management-system
```

### Step 2: Navigate to the Backend folder

```powershell
cd Backend
```

### Step 3: Create a virtual environment

```powershell
python -m venv venv
```

### Step 4: Activate the virtual environment

```powershell
.\venv\Scripts\Activate.ps1
```

If PowerShell blocks script execution, use:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Then activate the environment again.

### Step 5: Install backend dependencies

If you have a `requirements.txt` file:

```powershell
pip install -r requirements.txt
```

Otherwise:

```powershell
pip install Flask flask-cors
```

### Step 6: Run the backend server

```powershell
python main.py
```

The backend server will run at:

```text
http://127.0.0.1:5000
```

### Step 7: Test the backend

Open this URL in your browser:

```text
http://127.0.0.1:5000/api/health
```

Expected response:

```json
{
  "message": "Backend is running!",
  "status": "success"
}
```

## 9. Frontend Setup and Execution

Open a **second PowerShell terminal**. Keep the backend server running.

### Step 1: Navigate to the Frontend folder

```powershell
cd C:\Users\HP\student-management-system\Frontend
```

### Step 2: Install frontend dependencies

```powershell
npm install
```

### Step 3: Install React Router DOM

```powershell
npm install react-router-dom
```

### Step 4: Start the frontend server

```powershell
npm run dev
```

The Vite development server will display a local URL, usually:

```text
http://localhost:5173
```

Open that URL in your browser.

## 10. How to Run Both Servers

You need two separate terminals.

| Terminal | Application | Command |
|---|---|---|
| Terminal 1 | Flask Backend | `python main.py` |
| Terminal 2 | React Frontend | `npm run dev` |

**Important:** Both servers must be running simultaneously for the application to work correctly.

## 11. Backend API Endpoints

The Flask backend provides the following REST API endpoints.

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check backend status |
| POST | `/api/students/` | Add a new student |
| GET | `/api/students/` | Retrieve all students |
| GET | `/api/students/<id>` | Retrieve one student |
| PUT | `/api/students/<id>` | Update student information |
| DELETE | `/api/students/<id>` | Delete a student |

## 12. How Frontend and Backend Communicate

The application follows this architecture:

```text
        USER
         |
         v
   REACT FRONTEND
         |
         | HTTP Requests
         | Fetch API
         v
    FLASK BACKEND
         |
         | SQL Queries
         v
     SQLITE DATABASE
         |
         | Query Results
         v
    FLASK BACKEND
         |
         | JSON Response
         v
   REACT FRONTEND
         |
         v
   DISPLAY RESULTS
```

### Example

When a user adds a student:

1. The user enters student information in the React form.
2. React collects the input values.
3. React sends a POST request to the Flask API.
4. Flask receives and validates the JSON data.
5. Python executes an SQL INSERT query.
6. SQLite stores the student information.
7. Flask sends a JSON response.
8. React displays the result to the user.

## 13. Learning Outcomes

After building this project, I gained practical experience in:

- Python programming fundamentals.
- Building backend applications using Flask.
- Creating and testing REST APIs.
- Performing CRUD operations.
- Working with SQLite databases.
- Understanding SQL queries.
- Building React components.
- Managing frontend state and form inputs.
- Implementing page navigation using React Router DOM.
- Integrating a React frontend with a Python backend.
- Understanding how a full-stack application works.

## 14. Future Enhancements

Possible improvements for this project:

- User registration and login.
- Authentication and authorization.
- Search and filter students.
- Pagination.
- Form validation.
- Django REST Framework implementation.
- PostgreSQL database integration.
- Unit testing and API testing.
- Docker-based deployment.

---

**Project Name:** Student Management System

**Backend:** Python + Flask

**Frontend:** React.js + Vite

**Database:** SQLite

**Project Type:** Full-Stack Web Application

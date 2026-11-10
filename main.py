
import sqlite3

from flask import Flask, jsonify, request
from flask_cors import CORS

from database import create_table, get_connection


app = Flask(__name__)
CORS(app)


# Health Check
@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({
        "message": "Backend is running!",
        "status": "success"
    }), 200


# Validate student data
def validate_student(data):

    if not isinstance(data, dict):
        return None, "Invalid JSON data"

    required_fields = ["id", "name", "age", "marks"]

    if not all(field in data for field in required_fields):
        return None, "All fields are required"

    try:
        student_id = int(data["id"])
        name = str(data["name"]).strip()
        age = int(data["age"])
        marks = float(data["marks"])

        if student_id <= 0 or age <= 0:
            return None, "ID and age must be positive"

        if not name:
            return None, "Student name cannot be empty"

        if not 0 <= marks <= 100:
            return None, "Marks must be between 0 and 100"

        return {
            "id": student_id,
            "name": name,
            "age": age,
            "marks": marks
        }, None

    except (ValueError, TypeError, OverflowError):
        return None, "Please enter valid student details"


# CREATE - Add Student
@app.route("/api/students/", methods=["POST"])
def add_student():

    data = request.get_json(silent=True)
    student, error = validate_student(data)

    if error:
        return jsonify({"error": error}), 400

    connection = get_connection()

    try:
        connection.execute(
            """
            INSERT INTO students (id, name, age, marks)
            VALUES (?, ?, ?, ?)
            """,
            (
                student["id"],
                student["name"],
                student["age"],
                student["marks"]
            )
        )

        connection.commit()

        return jsonify({
            "message": "Student added successfully!",
            "student": student
        }), 201

    except sqlite3.IntegrityError:
        return jsonify({
            "error": "Student ID already exists"
        }), 409

    finally:
        connection.close()


# READ - View All Students
@app.route("/api/students/", methods=["GET"])
def get_students():

    connection = get_connection()

    try:
        students = connection.execute(
            "SELECT * FROM students ORDER BY id"
        ).fetchall()

        student_list = [dict(student) for student in students]

        return jsonify({
            "students": student_list,
            "status": "success"
        }), 200

    finally:
        connection.close()


# READ - View Single Student
@app.route("/api/students/<int:student_id>", methods=["GET"])
def get_student(student_id):

    connection = get_connection()

    try:
        student = connection.execute(
            "SELECT * FROM students WHERE id = ?",
            (student_id,)
        ).fetchone()

        if student is None:
            return jsonify({
                "error": "Student not found"
            }), 404

        return jsonify({
            "student": dict(student),
            "status": "success"
        }), 200

    finally:
        connection.close()


# UPDATE - Update Student
@app.route("/api/students/<int:student_id>", methods=["PUT"])
def update_student(student_id):

    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({"error": "Invalid JSON data"}), 400

    # ID comes from the URL, not the request body.
    update_data = {
        "id": student_id,
        "name": data.get("name"),
        "age": data.get("age"),
        "marks": data.get("marks")
    }

    student, error = validate_student(update_data)

    if error:
        return jsonify({"error": error}), 400

    connection = get_connection()

    try:
        cursor = connection.execute(
            """
            UPDATE students
            SET name = ?, age = ?, marks = ?
            WHERE id = ?
            """,
            (
                student["name"],
                student["age"],
                student["marks"],
                student_id
            )
        )

        if cursor.rowcount == 0:
            return jsonify({
                "error": "Student not found"
            }), 404

        connection.commit()

        return jsonify({
            "message": "Student updated successfully!",
            "student": student
        }), 200

    finally:
        connection.close()


# DELETE - Remove Student
@app.route("/api/students/<int:student_id>", methods=["DELETE"])
def delete_student(student_id):

    connection = get_connection()

    try:
        cursor = connection.execute(
            "DELETE FROM students WHERE id = ?",
            (student_id,)
        )

        if cursor.rowcount == 0:
            return jsonify({
                "error": "Student not found"
            }), 404

        connection.commit()

        return jsonify({
            "message": "Student deleted successfully!"
        }), 200

    finally:
        connection.close()


if __name__ == "__main__":

    create_table()

    app.run(debug=True, port=5000)

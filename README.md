# Student Management REST API

Lab Assignment 2 - Web Dev III (Node.js & Express)

## Run
```
npm install
npm start
```
Server runs on http://localhost:3000

## APIs
| Method | URL | Description |
|--------|-----|-------------|
| GET | /students | Get all students |
| GET | /students/:id | Get one student |
| POST | /students | Add student (body: name, course) |
| PUT | /students/:id | Update student (body: name, course) |
| DELETE | /students/:id | Delete student |

## Status codes
200 OK, 201 Created, 400 Bad Request, 404 Not Found

Data is stored in an array (data/students.js), no database used.
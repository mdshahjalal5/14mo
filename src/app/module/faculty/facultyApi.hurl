GET  http://localhost:3000/api/v1/faculty



GET  http://localhost:3000/api/v1/course/67ef7656fab6aeddf45fa132





DELETE http://localhost:3000/api/v1/course/67e4fb55fd1c2d8c8724c076


PATCH  http://localhost:3000/api/v1/course/67ef7656fab6aeddf45fa132
Content-Type: application/json
{
    "title": "javascript",
    "prefix": "JS",
    "code": 103,
    "credits": 4,
    "preRequisiteCourses": [
      {
        "course": "67ef30a8f7c0eff6d87f5159",
        "isDeleted": false
      }
    ]
}

POST http://localhost:3000/api/v1/faculty/create-faculty
Content-Type: application/json

  {
  "designation": "Professor",
  "name": {
    "firstName": "Ayesha",
    "middleName": "K.",
    "lastName": "Rahman"
  },
  "gender": "female",
  "dateOfBirth": "1975-04-15",
  "email": "ayesha.rahman@university.edu",
  "contactNo": "+8801700000001",
  "emergencyContactNo": "+8801700001001",
  "bloodGroup": "A+",
  "presentAddress": "House-12, Gulshan, Dhaka",
  "permanentAddress": "Sharifpur, Gazipur, Dhaka",
  "profileImg": "https://example.com/images/ayesha.jpg",
  "academicDepartment": "67e50aa3a8a6f3475f5c45a2"
}


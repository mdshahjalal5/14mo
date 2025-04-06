GET  http://localhost:3000/api/v1/course



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

POST http://localhost:3000/api/v1/course/create-course
Content-Type: application/json

{
    "title": "Casscading Style Sheets",
    "prefix": "CSS",
    "code": 102,
    "credits": 4,
    "preRequisiteCourses": [
      {
        "course": "67ef30a8f7c0eff6d87f5159",
        "isDeleted": false
      }
    ]
}

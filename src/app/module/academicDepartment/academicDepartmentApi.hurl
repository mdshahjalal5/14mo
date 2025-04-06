GET  http://localhost:3000/api/v1/academic-department


GET  http://localhost:3000/api/v1/academic-department/ami



DELETE http://localhost:3000/api/v1/academic-department/67e4fb55fd1c2d8c8724c076


PATCH  http://localhost:3000/api/v1/academic-department/67e3b67e204f1bb5a7f19267
Content-Type: application/json
{
    "name": "testingg"
}



POST http://localhost:3000/api/v1/academic-department/create-academic-department
Content-Type: application/json
{
  "name": "CSE",
  "academicFaculty": "67e3b6af204f1bb5a7f1926a"
}






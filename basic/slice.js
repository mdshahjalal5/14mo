const studentId = "2030020056";

const year = studentId.slice(0, 4);
const semesterCode = studentId.slice(4, 6);
const numericPart = studentId.slice(6);
console.log(year, semesterCode, numericPart);

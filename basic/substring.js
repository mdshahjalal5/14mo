//p: Example 2: Extracting Substrings with substring()

const studentId = "2030011234";

const year = studentId.substring(0, 4);
const semester = studentId.substring(4, 6);
const numericPart = studentId.substring(6);
console.log({
  year,
  semester,
  numericPart,
});

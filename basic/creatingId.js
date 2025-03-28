//p: 📝 Example 4: Incrementing and Formatting Student ID Numbers
//Goal: Increment the last ID "2024010009" to "2024010010".
//

const lastStudentId = "2024010023";

const numericPart = lastStudentId.substring(6);
const newNumericId = (Number(numericPart) + 1).toString().padStart(4, "0");
console.log(newNumericId, "creatingId.js", 9);

//p: Example 3: Padding Numbers with padStart()
//

const num1 = (5).toString().padStart(4, "0");
const num2 = (123).toString().padStart(4, "0");
const num3 = (9999).toString().padStart(4, "0");

console.log({
  num1,
  num2,
  num3,
});

const number1 = (5).toString().padStart(6, "0");
const number2 = (123).toString().padStart(6, "0");
const number3 = (9999).toString().padStart(6, "0");
console.log({
  number1,
  number2,
  number3,
});

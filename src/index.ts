import fs from "fs";

import { add, sub, mult, div } from "./lib/math.js";

const [input1, input2] = process.argv.slice(2);

const number1 = parseInt(input1);
const number2 = parseInt(input2);

const addition = add(number1, number2);
const multiplication = mult(number1, number2);
const subtraction = sub(number1, number2);
const division = div(number1, number2);

const csvHeader = "All of the operation are in math.js is written below: \n";

const csvFile = [
  `Addition of the ${number1} and ${number2} is ${addition}`,
  `Subtraction of the  ${number1} and ${number2}  is ${subtraction}`,
  `Multiplication of the ${number1} and ${number2} is ${multiplication}`,
  `Division of the ${number1} and ${number2} is ${division}`,
];

const csvContent = csvHeader + csvFile.join("\n");

const filePath = "./result.csv"; 

fs.writeFileSync(filePath, csvContent, "utf8");

console.log(`Results added in the ${filePath}`);

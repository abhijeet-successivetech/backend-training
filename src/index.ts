import fs from "fs";
import { MathOperations } from "./lib/math.js";

const math = new MathOperations();

const [input1, input2] = process.argv.slice(2);

const number1 = parseInt(input1);
const number2 = parseInt(input2);

const addition = math.add(number1, number2);
const multiplication = math.mult(number1, number2);
const subtraction = math.sub(number1, number2);
const division = math.div(number1, number2);

const csvHeader = "All of the operations written below:\n";

const csvFile = [
  `Addition of ${number1} and ${number2} is ${addition}`,
  `Subtraction of ${number1} and ${number2} is ${subtraction}`,
  `Multiplication of ${number1} and ${number2} is ${multiplication}`,
  `Division of ${number1} and ${number2} is ${division}`,
];

const csvContent = csvHeader + csvFile.join("\n");

const filePath = "./result.csv";

fs.writeFileSync(filePath, csvContent, "utf8");

console.log(`Results added in ${filePath}`);

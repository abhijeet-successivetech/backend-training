import path from "path"
import fs from "fs";


import { add, sub, mult, div } from "./lib/math";

const [input1, input2] = process.argv.slice(2);

const number1 = parseInt(input1);
const number2 = parseInt(input2);

const addition = add(number1, number2);
const multiplication = mult(number1, number2);
const subtraction = sub(number1, number2);
const division = div(number1, number2);

const csvHeader = "Operation,Number1,Number2,result \n";

const csvFile = [
  `Addition,${number1},${number2},${addition}`,
  `Subtraction,${number1},${number2},${subtraction}`,
  `Multiplication,${number1},${number2},${multiplication}`,
  `Division,${number1},${number2},${division}`,
];

const csvContent = csvHeader + csvFile.join("\n");
const filePath = path.resolve("result.csv");

fs.writeFileSync(filePath, csvContent, "utf8");

console.log(`Results added in the ${filePath}`);

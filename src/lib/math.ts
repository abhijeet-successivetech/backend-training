import lodash from "lodash";

export class MathOperations {
  public add(num1: number, num2: number): number {
    return lodash.add(num1, num2);
  }

  public sub(num1: number, num2: number): number {
    return lodash.subtract(num1, num2);
  }

  public mult(num1: number, num2: number): number {
    return lodash.multiply(num1, num2);
  }

  public div(num1: number, num2: number): number {
    return lodash.divide(num1, num2);
  }
}

import { SharedUtil } from "../shared/util";
import { cardObject } from "./input";

export class Helper {
  static parseInput(inputData: string[]): cardObject[] {
    return inputData.map((x) => {
      const splitedInput = x.split(":")[1].split("|");
      const winningNumber: number[] = this.cleanNumberArray(splitedInput[0]);
      const ownNumber: number[] = this.cleanNumberArray(splitedInput[1]);
      return {
        winningNumber,
        ownNumber,
      };
    });
  }

  static cleanNumberArray(line: string): number[] {
    return line
      .split(" ")
      .filter((x) => SharedUtil.isNumeric(x))
      .map((x) => Number(x))
      .filter((x) => x !== 0);
  }
}

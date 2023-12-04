import { SharedUtil } from "../shared/util";
import { Helper } from "./helper";
import { cardObject, input } from "./input";

function main(inputData: string[]): void {
  const parsedInput: cardObject[] = Helper.parseInput(inputData);
  let totalPoints = 0;

  parsedInput.forEach((card) => {
    let win = 0;

    card.ownNumber.forEach((x) => {
      if (card.winningNumber.indexOf(x) >= 0) {
        win++;
      }
    });
    const currPoints = win > 0 ? Math.pow(2, win - 1) : 0;
    totalPoints += currPoints;
  });

  SharedUtil.LogResult(totalPoints);
}

main(input);

import { SharedUtil } from "../shared/util";
import { Helper } from "./helper";
import { cardObject, input, inputTest } from "./input";

function main(inputData: string[]): void {
  const parsedInput: cardObject[] = Helper.parseInput(inputData);
  const ledger: number[] = [];

  parsedInput.forEach((card, n = 0) => {
    n++;

    // add one original card into the ledger
    ledger[n] = (ledger[n] ?? 0) + 1;

    // update ledger each time we win
    let winTimes = 1;
    card.ownNumber.forEach((x) => {
      if (card.winningNumber.indexOf(x) >= 0) {
        ledger[n + winTimes] = (ledger[n + winTimes] ?? 0) + ledger[n];
        winTimes++
      }
    });
  });

  const totalCopies = ledger.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  SharedUtil.LogResult(totalCopies);
}

main(input);

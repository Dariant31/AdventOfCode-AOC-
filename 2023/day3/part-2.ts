import { SharedUtil } from "../shared/util";
import { Helper } from "./helper";
import { input, lineChainObject, numberChainObject } from "./input";

function main(inputData: string[]): void {
  const allGearArr = [];
  let allGearSum = 0;

  for (
    let inputDataIndex = 0;
    inputDataIndex < inputData.length;
    inputDataIndex++
  ) {
    const currLineChain: lineChainObject = {
      currLine: inputData[inputDataIndex],
      prevLine:
        inputDataIndex === 0 ? undefined : inputData[inputDataIndex - 1],
      nextLine: inputData[inputDataIndex + 1] ?? undefined,
      currLineIndex: inputDataIndex,
    };

    const currLineArr = currLineChain.currLine.split("");

    for (
      let currLineIndex = 0;
      currLineIndex < currLineArr.length;
      currLineIndex++
    ) {
      const currChar = currLineArr[currLineIndex];
      if (Helper.isGearSymbol(currChar)) {
        const surroundingNumber = Helper.findSurroundingNumber(
          currLineChain,
          currLineArr,
          currLineIndex
        );
        if (surroundingNumber.length === 2) {
          allGearArr.push(surroundingNumber);
          const gearValue = surroundingNumber.reduce(
            (accumulator, currentValue) => accumulator * currentValue,
            1
          );
          allGearSum += gearValue;
        }
      }
    }
  }

  console.log("Here is the result => ", allGearSum);
}

/// --- THIS IS ENTRYPOINT ---
main(input);

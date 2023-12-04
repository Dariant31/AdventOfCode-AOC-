import { SharedUtil } from "../shared/util";
import { Helper } from "./helper";
import { input, lineChainObject } from "./input";

function main(inputData: string[]) {
  let relevantNumberSum: number = 0;

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
      let currLineindex = 0;
      currLineindex < currLineArr.length;
      currLineindex++
    ) {
      const currChar = currLineArr[currLineindex];
      const isCurrCharNumeric = SharedUtil.isNumeric(currChar);
      if (isCurrCharNumeric) {
        const numberChain = Helper.findNumberChain(currLineArr, currLineindex);
        if (Helper.isThereSymbolAround(numberChain, currLineChain)) {
          relevantNumberSum += numberChain.wholeNumber;
        }
        currLineindex = numberChain.endIndex;
      }
    }
  }

  console.log("here is the result sum ->", relevantNumberSum);
}

/// --- THIS IS ENTRYPOINT ---
main(input);

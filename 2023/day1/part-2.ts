import { input } from "./input";
import { Helper } from "./helper";
import { SharedUtil } from "../shared/util";

function main(inputData: string[]) {
  let sum = 0;
  inputData.forEach((line) => {
    sum += Helper.getFirstAndLastNumber(line, true);
  });
  SharedUtil.LogResult(sum);
}

// Entry Point Here
main(input);

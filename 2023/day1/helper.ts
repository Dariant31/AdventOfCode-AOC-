import { SharedUtil } from "../shared/util";

enum CheckResultEnum {
  NO_MATCH = "NO MATCH",
  PARTIAL_MATCH = "PARTIAL MATCH",
  FULL_MATCH = "FULL MATCH",
}

export class Helper {
  static digit = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  static numberDigitObject: { [key: string]: number } = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  static getFirstAndLastNumber(
    line: string,
    includeSpelledNumber?: boolean
  ): number {
    const numberArr = includeSpelledNumber
      ? Helper.stringToNumberArrParser(line)
      : SharedUtil.extractNumbersFromString(line);
    return Number(`${numberArr[0]}${numberArr[numberArr.length - 1]}`);
  }

  static stringToNumberArrParser(line: string): number[] {
    const numberArr: number[] = [];
    const lineArr = line.split("");
    let startMatchIndex = 0;
    let potentialyWordNumber = "";
    for (let index = 0; index < lineArr.length; index++) {
      const currentChar = lineArr[index];
      if (SharedUtil.isNumeric(currentChar)) {
        numberArr.push(Number(currentChar));
        startMatchIndex = index;
        potentialyWordNumber = "";
      } else {
        if (this.isStartOfSomeDigit(currentChar)) {
          startMatchIndex = index;
          potentialyWordNumber = currentChar;
          while (true) {
            startMatchIndex++;
            let stopLoop = false;
            switch (this.isThisWordNumber(potentialyWordNumber)) {
              case CheckResultEnum.NO_MATCH:
                stopLoop = true;
                break;
              case CheckResultEnum.PARTIAL_MATCH:
                potentialyWordNumber += lineArr[startMatchIndex];
                break;
              case CheckResultEnum.FULL_MATCH:
                stopLoop = true;
                numberArr.push(this.numberDigitObject[potentialyWordNumber]);
                break;
              default:
                stopLoop = true;
                break;
            }
            if (stopLoop) {
              break;
            }
          }
        } else {
          continue;
        }
      }
    }

    return numberArr;
  }

  static isStartOfSomeDigit(input: string): boolean {
    return this.digit.some((str) => str.startsWith(input));
  }

  static isThisWordNumber(char: string): CheckResultEnum {
    let returnValue: CheckResultEnum = CheckResultEnum.NO_MATCH;
    this.digit.forEach((i) => {
      if (i.includes(char)) {
        if (i === char) {
          returnValue = CheckResultEnum.FULL_MATCH;
        } else {
          returnValue = CheckResultEnum.PARTIAL_MATCH;
        }
      }
    });
    return returnValue;
  }
}

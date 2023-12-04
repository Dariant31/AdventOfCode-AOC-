export class SharedUtil {
  static isNumeric(char: string): boolean {
    return !isNaN(Number(char));
  }

  static containsNumber(inputStr: string): boolean {
    // Use a regular expression to check if there is at least one digit in the string
    const hasNumber = /\d/.test(inputStr);
    return hasNumber;
  }

  static cutString(
    inputString: string,
    startIndex: number,
    endIndex: number
  ): string {
    if (startIndex < 0) {
      startIndex = 0;
    }

    if (endIndex > inputString.length) {
      endIndex = inputString.length;
    }

    // Use substring method to extract the desired portion
    const output = inputString.substring(startIndex, endIndex + 1); // Adjust endIndex to include the character
    return output;
  }

  static generateRange(a: number, b: number): number[] {
    if (a > b) {
      throw new Error("Invalid input: 'a' should be less than or equal to 'b'");
    }

    const result: number[] = [];
    for (let i = a; i <= b; i++) {
      result.push(i);
    }
    return result;
  }

  static checkIfNumberIsInArray(
    numberArr: number[],
    numberToCheck: number
  ): boolean {
    let result = false;
    numberArr.forEach((x) => {
      if (x === numberToCheck) {
        result = true;
      }
    });
    return result;
  }

  static extractNumbersFromString(input: string): number[] {
    const regex = /\d+/g; // Match one or more digits globally
    const matches = input.match(regex);
    if (matches) {
      return matches.join('').split('').map((x) => Number(x));
    } else {
      return [];
    }
  }

  static LogResult(result: unknown): void {
    console.log('Here is the Result ==> ', result);
  }
}

import { SharedUtil } from "../shared/util";
import { lineChainObject, numberChainObject } from "./input";

export class Helper {
    static isThereSymbolAround(
        numberChain: numberChainObject,
        currLineChain: lineChainObject
      ): boolean {
        // relevant start & end index because it should be around the actual number
        const relevantStartIndex = numberChain.startIndex - 1;
        const relevantEndIndex = numberChain.endIndex + 1;
      
        // --- find symbol adjecent in current line ---
        const currLine = currLineChain.currLine;
        const charBefore = currLine[relevantStartIndex] ?? ".";
        const charAfter = currLine[relevantEndIndex] ?? ".";
        if (this.isSymbol(charBefore) || this.isSymbol(charAfter)) {
          return true;
        }
      
        // --- find symbol in prev line
        const prevLine = currLineChain.prevLine ?? "";
        const relevantPrevLine = SharedUtil.cutString(
          prevLine,
          relevantStartIndex,
          relevantEndIndex
        );
        if (this.isThereSymbolInThisString(relevantPrevLine)) {
          return true;
        }
      
        // --- find symbol in next line
        const nextLine = currLineChain.nextLine ?? "";
        const relevantNextLine = SharedUtil.cutString(
          nextLine,
          relevantStartIndex,
          relevantEndIndex
        );
        if (this.isThereSymbolInThisString(relevantNextLine)) {
          return true;
        }
      
        // if no symbol found around
        return false;
      }
      
      static isThereSymbolInThisString(line: string): boolean {
        let result = false;
        line.split("").forEach((c) => {
          if (this.isSymbol(c)) {
            result = true;
          }
        });
      
        return result;
      }

      static findAllNumberOnThisString(line: string): numberChainObject[] {
        const lineArr = line.split("");
        const allNumberOnThisLineArr: numberChainObject[] = [];
      
        for (let index = 0; index < lineArr.length; index++) {
          const element = lineArr[index];
          if (SharedUtil.isNumeric(element)) {
            const numberChain = this.findNumberChain(lineArr, index);
            allNumberOnThisLineArr.push(numberChain);
            index = numberChain.endIndex;
          }
        }
      
        return allNumberOnThisLineArr;
      }

      static findSurroundingNumber(
        currLineChain: lineChainObject,
        currLineArr: string[],
        currLineIndex: number
      ): number[] {
        const allSurroundingNumber: number[] = [];
        const relevantStartIndex = currLineIndex === 0 ? 0 : currLineIndex - 1;
        const relevantEndIndex =
          currLineIndex > currLineArr.length ? currLineArr.length : currLineIndex + 1;
        const relevantIndexRange = SharedUtil.generateRange(
          relevantStartIndex,
          relevantEndIndex
        );
      
        // find number in current line
        const currLinePrevChar = currLineArr[relevantStartIndex];
        const currLineNextChar = currLineArr[relevantEndIndex];
        if (
          SharedUtil.isNumeric(currLinePrevChar) ||
          SharedUtil.isNumeric(currLineNextChar)
        ) {
          const allNumberOnCurrLine = this.findAllNumberOnThisString(
            currLineChain.currLine
          );
          if (allNumberOnCurrLine.length === 1) {
            allSurroundingNumber.push(allNumberOnCurrLine[0].wholeNumber);
          } else {
            // find the number around gear symbol
            allNumberOnCurrLine.forEach((x) => {
              if (
                x.endIndex === relevantStartIndex ||
                x.startIndex === relevantEndIndex
              ) {
                allSurroundingNumber.push(x.wholeNumber);
              }
            });
          }
        }
      
        // find number in prev line
        const relevantPrevLineStrCut = SharedUtil.cutString(
          currLineChain.prevLine ?? "",
          relevantStartIndex,
          relevantEndIndex
        );
        if (SharedUtil.containsNumber(relevantPrevLineStrCut)) {
          const allNumberOnPrevLine = this.findAllNumberOnThisString(
            currLineChain.prevLine ?? ""
          );
          if (allNumberOnPrevLine.length === 1) {
            allSurroundingNumber.push(allNumberOnPrevLine[0].wholeNumber);
          } else {
            allNumberOnPrevLine.forEach((x) => {
              const startIndexWithinRelevantRange = SharedUtil.checkIfNumberIsInArray(
                relevantIndexRange,
                x.startIndex
              );
              const endIndexWithinRelevantRange = SharedUtil.checkIfNumberIsInArray(
                relevantIndexRange,
                x.endIndex
              );
              if (startIndexWithinRelevantRange || endIndexWithinRelevantRange) {
                allSurroundingNumber.push(x.wholeNumber);
              }
            });
          }
        }
      
        // find number in next line
        const relevantNextLineStrCut = SharedUtil.cutString(
          currLineChain.nextLine ?? "",
          relevantStartIndex,
          relevantEndIndex
        );
        if (SharedUtil.containsNumber(relevantNextLineStrCut)) {
          const allNumberOnNextLine = Helper.findAllNumberOnThisString(
            currLineChain.nextLine ?? ""
          );
          if (allNumberOnNextLine.length === 1) {
            allSurroundingNumber.push(allNumberOnNextLine[0].wholeNumber);
          } else {
            const relevantIndexRangeStr = relevantIndexRange.toString();
            allNumberOnNextLine.forEach((x) => {
              const startIndexWithinRelevantRange = SharedUtil.checkIfNumberIsInArray(
                relevantIndexRange,
                x.startIndex
              );
              const endIndexWithinRelevantRange = SharedUtil.checkIfNumberIsInArray(
                relevantIndexRange,
                x.endIndex
              );
              if (startIndexWithinRelevantRange || endIndexWithinRelevantRange) {
                allSurroundingNumber.push(x.wholeNumber);
              }
            });
          }
        }
      
        return allSurroundingNumber;
      }
      
      static findNumberChain(
        lineArr: string[],
        currIndex: number
      ): numberChainObject {
        const numberArr: number[] = [];
        const startIndex = currIndex;
        let endIndex = currIndex - 1; // -1 because we should start from 0
      
        for (let index = currIndex; index < lineArr.length; index++) {
          const element = lineArr[index];
          if (SharedUtil.isNumeric(element)) {
            numberArr.push(Number(element));
            endIndex++;
          } else {
            break;
          }
        }
      
        return {
          wholeNumber: Number(numberArr.join("")),
          startIndex,
          endIndex,
        };
      }
      
      static isSymbol(char: string): boolean {
        // symbol is everything that is not number and . (dot)
        const isNumber = SharedUtil.isNumeric(char);
        const isDot = char === ".";
        return !isNumber && !isDot;
      }

      static isGearSymbol(char: string): boolean {
        return char === "*";
      }

}
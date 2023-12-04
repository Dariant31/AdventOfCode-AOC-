import { SharedUtil } from "../shared/util";
import { Helper } from "./helper";
import { GameObject, SetObject, inputObject } from "./input";

const maxConstraint: SetObject = {
  red: 12,
  green: 13,
  blue: 14,
};

function main(inputData: GameObject[]) {
  let possibleGameIdsSum = 0;

  inputData.forEach((game: GameObject) => {
    let allSetsWithinContraint = true;

    game.sets.forEach((set: SetObject) => {
      if (
        !Helper.withinConstraint({
          currSet: set,
          maxConstraint,
        })
      ) {
        allSetsWithinContraint = false;
      }
    });

    if (allSetsWithinContraint) {
      possibleGameIdsSum += game.id;
    }
  });

  SharedUtil.LogResult(possibleGameIdsSum);
}

main(inputObject);

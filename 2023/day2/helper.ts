import { GameObject, SetObject, input } from "./input";

export class Helper {
  static withinConstraint(args: {currSet: SetObject, maxConstraint: SetObject}): boolean {
    const redWithinLimit = args.currSet.red <= args.maxConstraint.red;
    const greenWithinLimit = args.currSet.green <= args.maxConstraint.green;
    const blueWithinLimit = args.currSet.blue <= args.maxConstraint.blue;

    return redWithinLimit && greenWithinLimit && blueWithinLimit;
  }

  static convertInputStringIntoObject() {
    const gameObjects: GameObject[] = [];
    input.forEach((line) => {
      const game = line.split(":");
      const gameId = Number(game[0]);
      const gameSet = game[1].split(";");

      const gameObj: GameObject = {
        id: gameId,
        sets: [],
      };

      gameSet.forEach((set) => {
        const setObject: SetObject = {
          red: 0,
          green: 0,
          blue: 0,
        };
        const balls = set.split(",");
        balls.forEach((x) => {
          const ball = x.split(" ");
          const color: string = String(ball[2]);
          const sum: number = Number(ball[1]);
          setObject[color] = sum;
        });

        gameObj.sets.push(setObject);
      });

      gameObjects.push(gameObj);
    });
    console.log("Here is input as gameObject => ", JSON.stringify(gameObjects));
  }
}

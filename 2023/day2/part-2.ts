import { GameObject, inputObject } from "./input";

function main(inputData: GameObject[]) {
    let sumPowerGame = 0;

    inputData.forEach((game) => {
        let minRedNeeded = 0;
        let minGreenNeeded = 0;
        let minBlueNeeded = 0;

        game.sets.forEach((set) => {
            if(set.red > minRedNeeded){
                minRedNeeded = set.red;
            };
            if(set.green > minGreenNeeded){
                minGreenNeeded = set.green;
            };
            if(set.blue > minBlueNeeded){
                minBlueNeeded = set.blue;
            };
        });
        
        sumPowerGame += (minRedNeeded * minGreenNeeded * minBlueNeeded);
    });

    console.log('here is the result ->', sumPowerGame);
}

main(inputObject);
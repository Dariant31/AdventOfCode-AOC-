import { SharedUtil } from '../shared/util';
import { Helper } from './helper';
import {input} from './input';

function main(inputData: string[]) {
    let sum = 0;
    inputData.forEach((line) => {
        sum += Helper.getFirstAndLastNumber(line);
    });
    SharedUtil.LogResult(sum);
}

// Entry Point Here
main(input);
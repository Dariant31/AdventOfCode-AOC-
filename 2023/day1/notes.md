# Day 1
***They had us in the first half, not gonna lie***
it was a breeze part one, but tricky part to.
beware of the input. the given test input could give you false sense of hope.

### Part 1
- itterate all lines of input while extracting all Numbers from the string.
- put the numbers in an array, get the first and last element from that array.
- sum it all up.

### Part 2
- pretty much the same thing. the diffrence is ***How*** we extract the numbers.
- there are several methods, but the one i ended up using is to :
1. on each line, explode the string into array. itterate over them
2. look for Numbers first. if its a number, imediately put it on ```FoundNumber``` array.
3. when its a char, then check if its a start of some spelled numbers (for example o -> could be the start of ***one***);
4. if its a start of a spelled number, then i put it on another process to check if its a spelled number or not.
5. if yes, then translate that spelled number (in this case, im just using an object where the key is a spelled string and the value is the number it represent) and put into ```FoundNumber``` array, if no then just move along.
6. at the end, all numbers in the line will be stored on ```FoundNumber``` array, then we just get the first and last element from that array, combine it, and return it.
7. sum it all up.
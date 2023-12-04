# Day 3
A bit tricky at first. but when you know what to focus on, it gets simpler.

### Part 1
- as i always did, (maybe i'll changed when i'm leveling up on the programmers game) i itterate each line, explode the string on each line, and itterate again over them.
- i look for a number. if found i set another process to find the whole number (could be 1, 2, 3 or more digits). then that process retrun an object containing what the whole number is, the start index, and end index for that number.
- then i look for Symbols. On the same line adjecent to the whole number (start -1 and end +1 index), on the line before, and after. with -1 and +1 on the start and end index ( to make a square around the whole number )
- in practice i just cut the string on line before and after, given the start and end index of the found number. and look for symbols.
- when symbols found, then sum it with the other found numbers.


### Part 2
- itterate each line as before, but now when itterating char of a line, i looking for a gear symbol (*) and record the indicies around it (before and after)
- so now i look through the adjecent on the same line, the line before and after only withing those indicies around the founded gear symbol
- when a number is found, then i crosscheck it with tha stored number i have from the line before, current and after. i look for the number who have indicies around the indicies of said founded gear symbol
- in practice, i look for gear symbol. and then look for number in area square of the gear symbol.
- at the end i filter those who only have exactly 2 number around gear symbol. multiply them and sum it all up.
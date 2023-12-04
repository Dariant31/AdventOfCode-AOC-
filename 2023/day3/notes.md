# Day 3
A bit tricky at first. but when you know what to focus on, it gets simpler.

### Part 1
- as i always did, (maybe i'll changed when i'm leveling up on the programmers game) i itterate each line, explode the string on each line, and itterate again over them.
- i look for a number. if found i set another process to find the whole number (could be 1, 2, 3 or more digits). then that process retrun an object containing what the whole number is, the start index, and end index for that number.
- then i look for Symbols. On the same line adjecent to the whole number (start -1 and end +1 index), on the line before, and after. with -1 and +1 on the start and end index ( to make a square around the whole number )
- in practice i just cut the string on line before and after, given the start and end index of the found number. and look for symbols.
- when symbols found, then sum it with the other found numbers.
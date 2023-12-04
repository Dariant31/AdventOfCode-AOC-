# Day 4
Quite Day, Easiest Task, so far ~
i decided to parse the input into a ts object again, to simplify the task.

### Part 1
- the code is already self-explanatory, just itterate through the parsed input, check for wins, and at the end use the formula ```(2^n-1)``` where n=NumberOfWins, to calculate card points.
- sum all card points up to get the result.

### Part 2
- i use a ```ledger``` as a mean to keep track of which card have how many copies. its just a simple number array, where cardId is the index, and the value is the total copies that card have.
- the itteration works almost the same as before, but on each win, i expand/update the ledger.
- at the end, i sum up the number inside the ```ledger``` array to get the number of total copies.
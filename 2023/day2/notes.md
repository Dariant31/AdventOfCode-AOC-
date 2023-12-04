# Day 2
Pretty chill day, No traps in input, simple straight forward task.
i decided to *Parse* the input first, and make an array of Object out of it. to make the task easier

### Part 1
- with the input as a ```GameObject``` array, i just itterate over them.
- on each element, check if all the sets are within constrain.
- if yes, sum the gameId.

### Part 2
- the same, but instead of checking the sets for within constrain, i look for the highest number of each cubes (watchout : the question is asking for what the *minimum* number of cubes ***needed*** for the game to be possible. it means we have to search for what the *Maximum* number of cubes on that set).
- multiply all the found highest number.
- sum it all up.
# Unhandled Zero Division in JavaScript Function

This repository demonstrates a common error in JavaScript: unhandled zero division. The `foo` function in `bug.js` incorrectly handles the case where both input parameters are zero.  This can lead to unexpected behavior or errors. The corrected version is provided in `bugSolution.js`. 

## How to Reproduce
1. Clone this repository.
2. Run `bug.js`. Notice the potential error when both input parameters are 0.
3. Run `bugSolution.js`, which provides the corrected function.

## Solution
The solution includes explicit handling of the case when both `a` and `b` are zero, either by returning a specific value or throwing an error to indicate an invalid input.
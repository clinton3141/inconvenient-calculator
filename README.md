# Inconvenient Calculator

A useless calculator built to show off GitHub Actions [for a talk](https://github.com/clinton3141/actions-talk/):

* Simple Action Calculator: Can only do 3 + 4
* Input Calculator: Addition or multiplication of two numbers. Uses Action input fields
* Push Calculator (bc): Add a calculation to `calculation-simple.txt`, commit and push. The result is saved to `results` directory. Pull to get the result. Calculated with `bc` in bash.
* Tidyup: Periodically deletes results
* Push Calculator (church): Similar to the other push calculator but uses church encoding in `calculation.txt`. e.g. `ADD(SUCC(ZERO))(ZERO)`

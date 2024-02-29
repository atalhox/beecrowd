# Circle Area Calculator

## Description

This JavaScript program reads input from the standard input, filters out non-numeric lines, calculates the area of a circle for each numeric input, and then prints the result. The value of PI is set as a constant, and the area is calculated using the formula A = πr^2.

### Code

```javascript
// Read input from standard input and split it into lines
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// Define the value of PI as a constant
const PI = parseFloat(3.14159);

// Filter out non-numeric lines from the input
const numericLines = lines.filter((line) => !isNaN(parseFloat(line)));

// Calculate the area of a circle for each numeric input and print the result
numericLines.forEach((line) => {
  // Parse the numeric input as the radius of the circle
  const R = parseFloat(line);
  // Calculate the area using the formula A = πr^2
  const area = PI * Math.pow(R, 2);
  // Print the calculated area with 4 decimal places
  console.log("A=" + area.toFixed(4));
});
```

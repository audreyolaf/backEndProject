var rect = require("./rectangle");

function solveRect(l, b) {
  console.log("Solving for rectangle with 1 = " + l + " and b = " + b);

  if (l <= 0 || b <= 0) {
    console.log(
      "Rectangle dimensions should be > 0: 1 = " + l + ", and b = " + b
    );
  } else {
    console.log("The area is " + rect.area(l, b));
  }
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);

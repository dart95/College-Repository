import * as fun from "./fun.js";
document.getElementById("start-btn").addEventListener(
  "click",
  function () {
    let a = parseFloat(document.getElementById("a-value").value),
      func = document.getElementById("functions2Q").value,
      result = 0;
    switch (func) {
      case "perimeter":
        result += fun.perimeter(a);
        break;
      case "square":
        result += fun.square(a);
        break;
      default:
        return false;
    }
    return (document.getElementById(
      "output"
    ).innerHTML += `${func} (with a = ${a}) is ${result}
		</br>`);
  },
  false
);

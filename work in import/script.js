import * as fun from "/work in import/fun.js";
document.getElementById("start-btn").addEventListener(
  "click",
  function () {
    let a = parseFloat(document.getElementById("a-value").value),
      func = document.getElementById("functions5Q").value,
      result = 0;
    switch (func) {
      case "perimeter":
        result += fun.perimeter(a);
        break;
      case "square":
        result += fun.square(a);
        break;
      case "diameter":
        result += fun.diameter(a);
        break;
      case "square_circle":
        result += fun.square_circle(a);
        break;
      case "inscribed_circle":
        result += fun.inscribed_circle(a);
        break;
      case "circumscribed_circle":
        result += fun.circumscribed_circle(a);
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

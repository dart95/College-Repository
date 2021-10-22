export const perimeter = (a) => {
  return 4 * a;
};
export const square = (a) => {
  return a ** 2;
};

document.getElementById("start-btn").addEventListener(
  "click",
  function () {
    let a = parseFloat(document.getElementById("n-value").value),
      func = document.getElementById("functions2Q").value,
      result = 0;
    switch (func) {
      case "perimeter":
        result += perimeter(a);
        break;
      case "square":
        result += square(a);
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

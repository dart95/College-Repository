stylization();
function stylization(params) {
  let font = document.getElementById("SelectS").value,
    textcont = document.getElementById("outtext");
  textcont.style.fontFamily = font;
}
Array.from(document.getElementsByClassName("selector")).forEach(function (
  item
) {
  item.addEventListener("input", stylization, false);
});

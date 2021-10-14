(function () {
	"use strict";


function calc(){
	const att1 = document.getElementById('att1');
	const att2 = document.getElementById('att2');
	const att3 = document.getElementById('att3');

	const R = document.getElementById("k1").value;
	const G = parseFloat(document.getElementById("k2").value);
	const B = parseFloat(document.getElementById("k3").value);

	let outputdisplay = document.getElementById("output.display");

	document.body.style.backgroundColor ="rgb("+ R +" , "+ G + ", "+ B +")";
	
	att1.innerText = R;
	att2.innerText = G;
	att3.innerText = B;
}

document.activeElement.addEventListener("input", calc);

})();

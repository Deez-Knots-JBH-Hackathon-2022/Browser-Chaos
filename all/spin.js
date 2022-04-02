const CHANGE = 0.001;

let i = 0;
let x = 0.5 * window.innerWidth;

window.addEventListener("mousemove", (ev) => {
	if(ev.clientX - x < 0) i += CHANGE;
	else i -= CHANGE;
	x = ev.clientX;
	document.body.setAttribute("style", "transform: rotate(" + i + "deg);");
});

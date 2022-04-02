document.head.innerHTML += '<link href="https://allfont.net/allfont.css?fonts=comic-sans-ms" rel="stylesheet" type="text/css"/>';

let ps = document.getElementsByTagName("p")
for(let i = 0; i < ps.length; i++) {
	//p.innerHTML = p.innerHTML.replace(//g, "");
	ps[i].setAttribute("style", "font-family: 'Comic Sans MS';");
}
String.prototype.replaceAtWith = function(a, b) {
	return this.substring(0, a) + b + this.substring(a + 1);
}

function swap(string) {
	if(string.length < 5) return string;
	let temp = string.charAt(1);
	for(let i = 1; i < string.length - 3; i += 2) {
		string = string.replaceAtWith(i, string.charAt(i + 2));
	}
	return string.replaceAtWith(string.length - (string.length % 2 == 0 ? 3 : 2), temp);
}

let elements = document.querySelectorAll("div,p,span,h1,h2,h3,h4,h5,h6,b,strong,i,em,mark,u,strike,tt,sub,del,sup,big,small,span,li,title,button,code,label,option,time");
	//array of text-container elements
let words = [];
	//will be (array of (array of words))

//setup words
for(let i = 0; i < elements.length; i++) {
	let element = elements[i];
	let string = element.textContent || element.innerText || "";
	words.push(string.split(" "));
}

function swapSomething() {
	let index = Math.floor(Math.random() * elements.length);
	let subIndex = Math.floor(Math.random() * words[index].length);
	let element = elements[index];
	let word = words[index][subIndex];
	element.innerHTML = element.innerHTML.replace(word, swap(word));
	//console.log('replaced "' + word + '" with "' + swap(word) + '"');
}

setInterval(swapSomething, 10);

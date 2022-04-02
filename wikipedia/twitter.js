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

function clean(string, skipText) {
	return string.substring(0, string.indexOf(skipText)) + string.substring(string.indexOf(skipText) + skipText.length);
}

let paragraphs = document.getElementsByTagName("p");	//array of paragraph elements
let paragraphSplitWords = [];	//will be (array of (array of words))
for(let i = 0; i < paragraphs.length; i++) {
	let paragraph = paragraphs[i];
	let tempString = paragraph.innerHTML;
	for(let j = 0; j < paragraph.children.length; j++) {
		tempString = clean(tempString, paragraph.children[j].outerHTML);
	}
	paragraphSplitWords.push(tempString.split(" "));
	paragraph.innerHTML = "";
	for(let j = 0; j < paragraphSplitWords[i].length; j++) {
		paragraph.innerHTML += swap(paragraphSplitWords[i][j]) + " ";
	}
}

console.log("HELLO WORLD");
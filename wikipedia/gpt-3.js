const WORD_START = 8;

function request(prompt_string) {
	return new Promise((resolve, reject) => {
		let req = new content.XMLHttpRequest();
		req.addEventListener("readystatechange", () => {
			if(req.readyState === 4 && req.status === 200) {
				resolve(req.responseText);
			}
		});
		req.open("POST", "http://127.0.0.1:8000");
		req.send(prompt_string);
		console.debug('requested "' + prompt_string + '"');
	});
}

let texts = Array.from(document.querySelectorAll("p,span,li,a"));
for(let i = 0; i < texts.length; i++) {
	let text = texts[i];
	let string = text.textContent || text.innerText || "";
	if(string.length < 40) continue;
	let words = string.split(" ");
	words.splice(WORD_START, words.length - WORD_START);
	let reqText = words.join(" ");
	if(reqText.length < 40) continue;
	request(reqText).then((value) => {
		text.innerHTML = value;
		console.debug('received "' + value + '"');
	});
}

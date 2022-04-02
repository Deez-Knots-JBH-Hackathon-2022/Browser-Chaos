/*function doStuff() {
	switch(window.location.hostname) {
		case "bing.com":
			allSuggestions("li.sa_ag");
			break;
		case "duckduckgo.com":
			allSuggestions("div.acp");
			break;
		case "google.com":
			allSuggestions("li.sbct");
			break;
		case "youtube.com":
			allSuggestions("div.sbqs_c");
			break;
	}
}

function allSuggestions(identifier) {
	let elements = document.querySelectorAll(identifier);
	for(let i = 0; i < elements.length; i++) {
		singleSuggestion(elements[i]);
	}
}

function request(prompt_string) {
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
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

function singleSuggestion(element, inputId) {
	let text = inputId.value.trim();
	request("I am a Twitter user and " + text).then((value) => {
		element.innerHTML = text + " " + value;
	});
}

setInterval(doStuff, 1000);*/
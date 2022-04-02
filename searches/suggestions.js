function identifySite() {
	switch(window.location.hostname) {
		case "bing.com":
			allSuggestions("li.sa_ag", "");
			break;
		case "duckduckgo.com":
			allSuggestions("div.acp", "");
			break;
		case "google.com":
			allSuggestions("li.sbct", "");
			break;
		case "youtube.com":
			allSuggestions("div.sbqs_c", "");
			break;
	}
}

function allSuggestions(identifier, inputId) {
	let elements = document.querySelectorAll(identifier);
	for(let i = 0; i < elements.length; i++) {
		singleSuggestion(elements[i]);
	}
}

function request(prompt) {
	//~	fill out
}

function singleSuggestion(element, inputId) {
	let text = inputId.value.trim();
	request("I am a Twitter user and " + text).then((value) => {
		element.innerHTML = text + " " + value;
	});
}
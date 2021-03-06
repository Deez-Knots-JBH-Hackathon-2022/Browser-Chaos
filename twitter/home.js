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

function detweet() {
	let tweets = Array.from(document.querySelectorAll("span.css-901oao,span.css-16my406,span.r-poiln3,span.r-bcqeeo,span.r-qvutc0")).filter(x => x.children.length == 0 && x.textContent.trim().length >= 30);
	let tweet = tweets[Math.floor(Math.random() * tweets.length)];
	request(tweet.textContent.trim()).then((value) => {
		tweet.innerHTML = value;
		console.debug('received "' + value + '"');
	});
}

window.addEventListener("load", () => {
	setTimeout(detweet, 5000);
	setInterval(detweet, 10000);
});

//ENV stuff
require("dotenv").config({
	path: `${__dirname}/.env`
});

const API_KEY = process.env["API_KEY"];
const ORG_ID = process.env["ORG_ID"];

//requires
const http = require("http");
const { Configuration, OpenAIApi } = require("openai");


//openai stuff
const config = new Configuration({
	organization: ORG_ID,
	apiKey: API_KEY
});
const openai = new OpenAIApi(config);
async function test() {
	let responses = (await openai.createCompletion("text-davinci-002", {
		prompt: "talk about the weather",
		max_tokens: 50
	})).data.choices;
	for(let i = 0; i < responses.length; i++) {
		console.log(responses[i].text.trim());
	}
}
for(let i = 0; i < 10; i++) {
	test();
}

//request listener / responder
const requestListener = (req, res) => {
	res.writeHead(200);
	res.end(`bruh lmao (${i++})`);
};


//start server
const server = http.createServer(requestListener);
server.listen(8000);

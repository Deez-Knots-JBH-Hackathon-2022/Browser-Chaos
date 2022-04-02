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
const TOKEN_COUNT = 50;
const config = new Configuration({
	organization: ORG_ID,
	apiKey: API_KEY
});
const openai = new OpenAIApi(config);
async function prompt_ai(prompt_string) {
	let responses = (await openai.createCompletion("text-davinci-002", {
		prompt: prompt_string,
		max_tokens: TOKEN_COUNT
	})).data.choices;
	return responses.map(x => x.text.trim()).filter(x => x.length > 0 && x.length <= 200);
}


//request listener / responder
const requestListener = (req, res) => {
	let data = "";
	req.on("data", (chunk) => {
		data += chunk.toString();
	});
	req.on("end", async () => {
		console.log(`received prompt: "${data}"`);
		let responses = await prompt_ai(data);
		let response = responses[Math.floor(Math.random() * responses.length)];
		res.writeHead(200, {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "text/plain"
		});
		res.end(response);
		console.log(`responded with: "${response}"`);
	});
};


//start server
const server = http.createServer(requestListener);
server.listen(8000);

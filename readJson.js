const fs = require('fs')

fs.readFile('htmlToJson.json', 'utf8', (err, data) => {
	if (err) {
		console.error(err)
		return
	}
	console.log(data)
	console.log("--------------------")
	parseJsonToHtml(data)
}); 

function parseJsonToHtml(data) {
	var js2xmlparser = require("js2xmlparser");
	/*xml2js.parseString(data, (err, result) => {
		if (err) {
			throw err;
		}

		// `result` is a JavaScript object
		// convert it to a JSON string
		const json = JSON.stringify(result, null, 4);
		
		// log JSON string
		console.log(json);
		fs.writeFile('jsonToHtml.html', json, function(err) {
			if (err) return console.log(err);
		});

	});*/
	var personJSONString=JSON.parse(data); 
	console.log(JSON.js2parseJsonToHtml(data));
	console.log(personJSONString);
}
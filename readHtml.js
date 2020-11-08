const fs = require('fs')

fs.readFile('test.html', 'utf8', (err, data) => {
	if (err) {
		console.error(err)
		return
	}
	console.log(data)
	console.log("--------------------")
	parseHtmlToJson(data)
});


function parseHtmlToJson(data) {
	const xml2js = require('xml2js');
	xml2js.parseString(data, (err, result) => {
		if (err) {
			throw err;
		}

		// `result` is a JavaScript object
		// convert it to a JSON string
		const json = JSON.stringify(result, null, 4);
		
		// log JSON string
		console.log(json);
		fs.writeFile('htmlToJson.json', json, function(err) {
			if (err) return console.log(err);
		});

	});
}


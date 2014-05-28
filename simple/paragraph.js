var argv = require('optimist').argv,
	fs = require('fs'),
	env = require('jsdom').env;

var file = argv._[0];

var html = fs.readFileSync(file, 'UTF-8');

env(html, function (errors, window) {
	console.log(errors);

	var $ = require('jquery')(window);

	$(html).find('p').each(function(index){
		var content = $(this).html();
		console.log("Paragraph "+(index+1)+": "+content);
	});
});

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
var app = express();

// hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// app.use((req, res, next) => {
// 	var now = new Date().toString();
// 	var log = `${now} : ${req.method}  ${req.url}`;
//
// 	fs.appendFile('server.log', log + '\n', (err) => {
// 		if(err) console.log('Unable to append server.log');
// 	});
// 	console.log(log);
// 	next();
// });

// hbs.registerHelper('getCurrentYear', () => {
// 	return new Date().getFullYear();
// });

app.get('/', (req, res) => {
	res.render('home.hbs');
});

app.get('/bad', (req, res) => {
	res.send({
		error : 'Bad request'
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

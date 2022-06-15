/**
 * name : app.js
 * author : Rakesh Kumar
 * Date : 01-June-2022
 * Description : Start file of a documents service
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: './.env' });

let environmentData = require('./envVariables')();

if (!environmentData.success) {
	console.log('Server could not start . Not all environment variable is provided');
	process.exit();
}

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true, limit: '50MB' }));
app.use(bodyParser.json({ limit: '50MB' }));

app.use(express.static('public'));

/* Logs request info if environment is not development*/
if (process.env.ENABLE_LOG === 'true') {
	app.all('*', (req, res, next) => {
		console.log('***Documents Service Logs Starts Here***');
		console.log('%s %s on %s from ', req.method, req.url, new Date(), req.headers['user-agent']);
		console.log('Request Headers: ', req.headers);
		console.log('Request Body: ', req.body);
		console.log('Request Files: ', req.files);
		console.log('***Documents Service Logs Ends Here***');
		next();
	});
}

//  var Renderer = require('docsify-server-renderer')
// var readFileSync = require('fs').readFileSync

// // init
// var renderer = new Renderer({
//   template: readFileSync('./docsify/index.html', 'utf-8'),
//   config: {
//     name: 'Test',
//     basePath: '/docsify',
//     repo: 'te/st',
//     loaddNavbar: true,
//     loadSidebar: true,
//     subMaxLevel: 3,
//     auto2top: true
//   }
// })
// app.get('/docsify', (req, res) =>{
//     renderer.renderToString(req.url, (html, err) =>{
//         if(err) {
//             console.log("err",err);
//         }

//         res.send(html);
//         console.log(html)
//     })
// })

/* Registered routes here */
require('./routes')(app);

// Server listens to given port
app.listen(process.env.APPLICATION_PORT, 'localhost', (res, err) => {
	if (err) {
		onError(err);
	}
	console.log('Environment: ' + process.env.APPLICATION_ENV);
	console.log('Application is running on the port:' + process.env.APPLICATION_PORT);
});

// Handles specific listen errors with friendly messages
function onError(error) {
	switch (error.code) {
		case 'EACCES':
			console.log(process.env.APPLICATION_PORT + ' requires elevated privileges');
			process.exit(1);
		case 'EADDRINUSE':
			console.log(process.env.APPLICATION_PORT + ' is already in use');
			process.exit(1);
		default:
			throw error;
	}
}

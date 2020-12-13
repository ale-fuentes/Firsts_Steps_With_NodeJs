HELMET
https://www.npmjs.com/package/helmet
https://helmetjs.github.io/docs/csp/

This module help us to protecting for vulnerability in our projects.

ale: > npm i helmet

next step, inner project ussing helmet in app.js

//import helmet
var helmet = require('helmet');

//ussing helmet with midlleware 
var app = express();
app.use(helmet());

this way, whe can protecte to 7 of 
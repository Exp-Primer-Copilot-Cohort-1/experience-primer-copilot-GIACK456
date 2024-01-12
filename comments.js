//create web server
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

//set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));

//set up static files
app.use(express.static(path.join(__dirname, 'public')));

//set up ejs
app.set('view engine', 'ejs');

//set up routes
const index = require('./routes/index');
app.use('/', index);

const comments = require('./routes/comments');
app.use('/comments', comments);

//server listen
app.listen(3000, function(){
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

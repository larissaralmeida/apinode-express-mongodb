const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.listen(3000, 'localhost', () => {
    console.log('Server online on port: 3000');
    console.log('Shut down server: ctrl + c');
});

require('./controllers/authController')(app);
require('./controllers/projectController')(app);
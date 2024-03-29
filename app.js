'use strict'

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
  .then(() => console.log('Database conectado com sucesso...'))
  .catch(err => console.log('Error: ' + err))

  const cadastro = require('./routes/Cadastro')
const app = express();
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// Handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index route
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// // Gig routes
// app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
// const cadastro = require('./routes/cadastro');
// app.use('/cadastro', cadastro);

//  module.exports = app;


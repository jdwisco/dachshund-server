// Database
// ========
// Connect to the relational database

'use strict';

var knex      = require('knex')(require(__dirname + '/../../knexfile')[process.env.NODE_ENV]),
    bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

export default bookshelf;

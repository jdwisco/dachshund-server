// User Model
// ==========
// Create a user model class

'use strict';

import Bookshelf from './database';

require('./gmail_token');

var User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  gmailToken: function() {
    return this.hasOne('GmailToken');
  }
});

export default Bookshelf.model('User', User);

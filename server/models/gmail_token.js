// Gmail Token Model
// ==========
// Create a gmail token model class

'use strict';

import Bookshelf from './database';

var GmailToken = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true
});

export default Bookshelf.model('GmailToken', GmailToken);

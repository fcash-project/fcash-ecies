'use strict';

var spec = {
  name: 'ECIES',
  message: 'Internal Error on fcash-ecies Module {0}',
  errors: [{
    name: 'InvalidPadding',
    message: 'Invalid padding: {0}'
  }]
};


module.exports = require('fcash-lib').errors.extend(spec);


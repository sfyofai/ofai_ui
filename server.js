'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

// Start server only if not in test environment
if (require.main === module) {
  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
}

module.exports = app;
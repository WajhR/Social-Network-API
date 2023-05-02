const express = require('express');
const PORT = 3000;
const db = require('./config/connection');
const routes = require('./routes');


const app = express();

// Middleware to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
  });
});

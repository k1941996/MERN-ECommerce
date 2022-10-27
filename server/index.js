const express = require('express');
const env = require('dotenv');
const database = require('./database/initDb');

const app = express();
env.config();
database.initialiseDatabase();

const HOST = `localhost`;
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
const routes = require('./routes/indexRoute');
app.use('/api', routes);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello world' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

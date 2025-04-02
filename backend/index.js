const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { getPlat } = require('./get_functions/get_menu');

const app = express();
const port = 3000;

app.use(cors()); // ← indispensable pour React
app.use(express.json());

app.get('/plats/:id', getPlat);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

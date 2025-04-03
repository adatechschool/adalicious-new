const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { getPlats } = require('./get_functions/get_menu');
const {insertCommande} = require('./get_functions/insert_com')
const {updateStatutCommande} = require('./get_functions/update_statut')
const {archiverCommande} = require('./get_functions/update_archive')
const { getCommandeById } = require('./get_functions/get_commande');

const app = express();
const port = 3000;

app.use(cors()); // ← indispensable pour React
app.use(express.json());

app.get('/commandes/:id', getCommandeById);
app.get('/plats', getPlats);
app.post('/commandes', insertCommande);
app.put('/commandes/statut', updateStatutCommande);
app.post('/commandes/archiver', archiverCommande);



app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

// Importer le module express
import express from 'express';
// Importer le fichier de router du fichier salutations.route
import router from './src/salutations.route.js';
import dotenv from "dotenv";
dotenv.config();

// Créer une application express
const app = express();
const PORT = process.env.PORT || 3000;

// On associe la route /api/salutations au router importé
app.use('/api/salutations', router);

app.get('/', (req, res) => {
    res.send("<h1>bienvenue!</h1>");
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
import express from 'express';
import {trouverSalutation, trouverSalutations} from '../controllers/salutations.controller.js'
// Nous créons un objet router qui va nous permettre de gérer les routes
const router = express.Router();

router.get('/liste_pour_langue', trouverSalutations);
router.get('/liste_pour_langue/:langue', trouverSalutation);

//router.get('/liste', (req, res) => {
//    getSalutations(req, res);
//});
//router.get('/', (req, res) => {
//    const params = req.params;
//});

// IMPORTANT: On exporte le router pour pouvoir l'utiliser dans index.js
// Cet objet peut être utilisé comme un middleware
export default router;

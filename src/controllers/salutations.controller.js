import {salutations} from '../models/salutations.model.js';

const trouverSalutation = async (req, res) => {

    // Teste si le paramètre langue est présent et valide
    if(!req.params.code_langue || req.params.code_langue !== "en" || req.params.code_langue !== "es" || req.params.code_langue !== "fr" || req.params.code_langue !== "de"){
        res.status(400);
        res.send({
            message: "La langue rechercher n'est pas presant ou valide"
        });
        return;
    }

    try {
        // Appel à la fonction getSalutation dans le modèle
        const salutation = await salutations.getSalutation(req.params.code_langue);

        // On retourne un message d'erreur avec le code 404 si aucun professeur n'a été trouvé
        // ** à faire en exercice **
            if(salutation == null){
                 res.status(404);
                 res.send({
                 message: "aucune salutations trouver"
             });
        return;
            }
        // OK - on retourne l'objet professeur
        res.send(salutation);

    } catch (erreur) {
        // S'il y a eu une erreur au niveau de la requête, on retourne un erreur 500 car 
        //  c'est du serveur que provient l'erreur.
        console.log('Erreur : ', erreur);
        res.status(500)
        res.send({
            message: "Erreur lors de la récupération de la salutation avec le code langue " + req.params.id
        });
    };
};
const trouverSalutations = async (req, res) => {
    try {
        // Appel à la fonction getSalutation dans le modèle
        const salutation = await salutations.getSalutations();

        // On retourne un message d'erreur avec le code 404 si aucun professeur n'a été trouvé
        // ** à faire en exercice **

        // OK - on retourne l'objet professeur
        res.send(salutation);

    } catch (erreur) {
        // S'il y a eu une erreur au niveau de la requête, on retourne un erreur 500 car 
        //  c'est du serveur que provient l'erreur.
        console.log('Erreur : ', erreur);
        res.status(500)
        res.send({
            message: "Erreur lors de la récupération de la salutation avec le code langue " + req.params.id
        });
}};

export {
    trouverSalutation,
    trouverSalutations
}


export const getSalutations = (req, res) => {
    
    res.json(salutations);
    //console.log(salutations);
};

export const createSalutations = (req, res) => {
    // Logique pour créer un produit
    // produits.<TODO>
};

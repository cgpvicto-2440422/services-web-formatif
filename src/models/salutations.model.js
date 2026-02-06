import pool from '../config/db.js';

const getSalutation = async (code_langue) => {

    // On spécifie LIMIT 1 pour s'assurer de ne récupérer qu'un seul enregistrement
    const requete = `SELECT message FROM salutations WHERE code_langue = ?`;
    const params = [code_langue]

    try {
        // Attention: mysql2 retourne un tableau avec deux éléments : les résultats et 
        //      les informations sur les champs
        // Nous n'avons besoin que des résultats ici (décomposition du tableau en ignorant 
        //      le second élément)
        const [resultats] = await pool.query(requete, params);
        // Retourne le premier élément du tableau ou null si vide
        return resultats ?? null;
    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : 
                    ${erreur.sqlMessage}`);
        throw erreur;
    }
};


const getSalutations = async () => {

    // On spécifie LIMIT 1 pour s'assurer de ne récupérer qu'un seul enregistrement
    const requete = `SELECT message FROM salutations`;

    try {
        // Attention: mysql2 retourne un tableau avec deux éléments : les résultats et 
        //      les informations sur les champs
        // Nous n'avons besoin que des résultats ici (décomposition du tableau en ignorant 
        //      le second élément)
        const [resultats] = await pool.query(requete);
        // Retourne le premier élément du tableau ou null si vide
        return resultats ?? null;
    } catch (erreur) {
        console.log(`Erreur, code: ${erreur.code} sqlState ${erreur.sqlState} : 
                    ${erreur.sqlMessage}`);
        throw erreur;
    }
};

//ajout salutation
//salutation.push({code_langue, langue, message});

export default { 
    getSalutation,
    getSalutations
};

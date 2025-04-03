const { getPool } = require('../db');
const pool = getPool();

const updateStatutCommande = async (req, res) => {
  const { id, statut } = req.body;

  if (!id || !statut) {
    return res.status(400).json({ message: 'id et statut sont requis' });
  }

  try {
    const result = await pool.query(
      `UPDATE "adalicious"."commandes"
       SET statut = $1
       WHERE id = $2
       RETURNING *`,
      [statut, id]
    );

    if (result.rows.length === 0) {
      return res.status(40).json({ message: 'Commande non trouvée' });
    }

    res.json({
      message: 'Statut mis à jour avec succès',
      commande: result.rows[0]
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour :', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

module.exports = { updateStatutCommande };

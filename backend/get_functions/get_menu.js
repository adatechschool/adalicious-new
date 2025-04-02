const { getPool } = require('../db');
const pool = getPool();

const getPlat = async (req, res) => {
  const platId = req.params.id;

  try {
    const result = await pool.query(
        `SELECT plat, description, image FROM "adalicious"."Menu" WHERE id = $1`,
        [platId]
      );      
      
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Plat non trouvé" });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    console.error('Erreur lors de la récupération du plat :', error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};

module.exports = { getPlat };

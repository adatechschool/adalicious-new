import { useEffect, useState } from 'react';

function App() {
  const [plat, setPlat] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/plats/1') // Appelle ton backend Express
      .then(res => res.json())
      .then(data => setPlat(data))
      .catch(err => console.error("Erreur de récupération :", err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🍽️ Plat du jour</h1>
      {plat ? (
        <div>
          <h2>{plat.plat}</h2>
          <p>{plat.description}</p>
          <p style={{ fontSize: '2rem' }}>{plat.image}</p>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default App;

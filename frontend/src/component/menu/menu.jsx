import { useEffect, useState } from 'react';

export default function ListePlats() {
  const [plats, setPlats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/plats')
      .then((res) => res.json())
      .then((data) => setPlats(data))
      .catch((err) => console.error('Erreur de chargement :', err));
  }, []);

  return (
    <div>
      <h2>Nos plats</h2>
      <ul>
        {plats.map((plat) => (
          <li key={plat.id}>
            <h3>{plat.plat}</h3>
            <p>{plat.description}</p>
            {plat.image && <img src={plat.image} alt={plat.plat} width="100" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

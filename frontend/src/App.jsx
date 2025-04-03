import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './component/accueil/accueil-new'
import ChoixMenu from './component/menu/menu';
import SuiviCommande from './component/suivi/suivi';


const router = createBrowserRouter([
  { path: '/', element: <Accueil /> },
  { path: '/choix-menu', element: <ChoixMenu /> },
  { path: '/suivi', element: <SuiviCommande /> },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;

import './App.css'
import MainPageBlocks from './components/MainPageBlocks/MainPageBlocks';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './pages/about_us/page';
import Contacts from './pages/contacts/page';
import Services from './pages/services/page';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainPageBlocks/>
      ),
    },
    {
      path: "about_us",
      element: <AboutUs />,
    },
    {
      path: "contacts",
      element: <Contacts />,
    },
    {
      path: "services",
      element: <Services />,
    },
  ]);
  
  return (
      <RouterProvider router={router} />
  )
}

export default App

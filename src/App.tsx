import './App.css'
import MainPageBlocks from './components/MainPageBlocks/MainPageBlocks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/about_us/page';
import Contacts from './pages/contacts/page';
import Services from './pages/services/page';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPageBlocks/>} />
          <Route path='/about_us' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

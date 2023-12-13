import { useState } from 'react'
import './App.css'
import MainPageBlocks from './components/MainPageBlocks/MainPageBlocks';
import BurgerContent from './components/BurgerMenu/BurgerContent';
import BurgerBtn from './components/BurgerMenu/BurgerBtn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/about_us/page';
import Contacts from './pages/contacts/page';
import Services from './pages/services/page';

function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <main className="main" onClick={() => setIsMenuActive(false)}>
      <Router>
        {/*<LogoPreloader/>*/}
        <section className="content">
          <BurgerBtn activateMenuFunc={setIsMenuActive}/>
          <BurgerContent isActive={isMenuActive} activateMenuFunc={setIsMenuActive}/>
          <Routes>
            <Route path='/' element={<MainPageBlocks/>} />
          </Routes>
        </section>
        <Routes>
          <Route path='/about_us' element={<AboutUs />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App

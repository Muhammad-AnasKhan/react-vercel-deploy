import './styles/Style.css';
import Counter from './components/Counter';
import LightDarkMode from './components/LightDarkMode';
import BulbOnOff from './components/BulbOnOff';
import HeaderNav from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <div className='body-container' style={{ padding: "1rem" }}>

          <HeaderNav />

          <Routes>
            <Route path='/' element={
              <>
                <Counter />
                <LightDarkMode />
                <BulbOnOff />
              </>
            } />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>


          {/* <Counter />
          <LightDarkMode />
          <BulbOnOff /> */}

          {/* <Contact/> */}
          {/* <About/> */}


        </div>
      </>
    </BrowserRouter>
  );
}

export default App;

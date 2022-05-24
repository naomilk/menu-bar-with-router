import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import { Signup } from './Pages/Signup';
import { MenuBar } from './Components/MenuBar';

function App() {
  return (
    <Router>
      <header class="px-5 py-2">
        <div>
          <p>Henlo dis is header</p>
        </div>
      </header>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </Router>
  );
}

export default App;
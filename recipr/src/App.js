import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Dashboard/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact-us' element={<Contact/>}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Contact from './pages/contact';
import AddRecipe from './pages/addRecipe';
import EditingContext from "./Context/EditingContext"

function App() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <EditingContext.Provider value={{isEditing, setIsEditing}}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard />}></Route>
          <Route path='/add' element={<AddRecipe />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact-us' element={<Contact />}></Route>
        </Routes>
      </Router>
    </EditingContext.Provider>
  );
}

export default App;

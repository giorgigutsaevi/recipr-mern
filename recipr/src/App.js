import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Contact from './pages/contact';
import AddRecipe from './pages/addRecipe';
import EditRecipe from "./pages/editRecipe"
import EditingContext from "./Context/EditingContext"
import Login from './pages/login';
import Signup from './pages/signup';
import axios from "axios"
import { AuthContextProvider } from './Context/AuthContext';
import { UserContextProvider } from "./Context/UserContext"

axios.defaults.withCredentials = true;

function App() {
  const [editId, setEditId] = useState("")

  return (
    <UserContextProvider>
      <AuthContextProvider>
        <EditingContext.Provider value={{ editId, setEditId }}>
          <Router>
            <Routes>
              <Route exact path='/' element={<Dashboard />}></Route>
              <Route exact path='/login' element={<Login />}></Route>
              <Route exact path='/signup' element={<Signup />}></Route>
              <Route path='/add' element={<AddRecipe />}></Route>
              <Route path='/edit/:id' element={<EditRecipe />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact-us' element={<Contact />}></Route>
            </Routes>
          </Router>
        </EditingContext.Provider>
      </AuthContextProvider>
    </UserContextProvider>
  );
}

export default App;

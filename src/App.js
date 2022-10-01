
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import {NavLink} from 'react-router-dom'
import Navstyle from './components/Nav.style';
function App() {
  return (
    <div >
      <Navstyle>
      <NavLink to="/Login">Login</NavLink>
      <NavLink to="signup">Signup</NavLink>
      
      </Navstyle>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
          <Route path='Signup' element={<Signup/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

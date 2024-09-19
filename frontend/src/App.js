import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import Edit from './pages/edit';


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-nav mr-auto"  >
          <li className="nav-item ">
            <Link to={"/"} className='nav-link' >Home</Link>
          </li>
          <li className="nav-item ">
            <Link to={"/create"} className='nav-link' >Create</Link>
          </li>

        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link to="/">Home</Link>
      <Link to="/my-box">My Box</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Navbar
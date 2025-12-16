import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">Pizzería Mamma Mia!</Link>
          <Link to="/" className="btn-nav">🍕 Home</Link>
          {token ? (
            <>
              <Link to="/profile" className="btn-nav">🔓 Profile</Link>
              <button className="btn-nav">🔒 Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-nav">🔐 Login</Link>
              <Link to="/register" className="btn-nav">🔐 Register</Link>
            </>
          )}
        </div>
        <div className="navbar-right">
          <Link to="/cart" className="btn-nav btn-total">
            🛒 Total: ${formatPrice(total)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
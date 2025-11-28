import { formatPrice } from '../utils/formatPrice';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <span className="navbar-brand">Pizzería Mamma Mia!</span>
          <button className="btn-nav">🍕 Home</button>
          {token ? (
            <>
              <button className="btn-nav">🔓 Profile</button>
              <button className="btn-nav">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn-nav">🔐 Login</button>
              <button className="btn-nav">🔐 Register</button>
            </>
          )}
        </div>
        <div className="navbar-right">
          <button className="btn-nav btn-total">🛒 Total: ${formatPrice(total)}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
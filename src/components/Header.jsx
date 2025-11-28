import headerImg from '../assets/images/Header.jpg';

const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="header-content">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;
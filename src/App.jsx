import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <RegisterPage />
      <Footer />
    </>
  );
}

export default App;
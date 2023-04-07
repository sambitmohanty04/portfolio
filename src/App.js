import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/portfolio' element={<Portfolio />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

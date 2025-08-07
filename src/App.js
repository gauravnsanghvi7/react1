import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Signup from './components/signup';
import Gallery from './components/gallery';
import Contact from './components/contact';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <Footer />
          </div>
  );
}

export default App;

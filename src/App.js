
import './index.css';
import { Products } from './components/Products';
import { Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products />} />
    </Routes>
  </BrowserRouter>
}

export default App;

import logo from './logo.svg';
import './App.css';
import HelloWorld from './pages/HelloWorld';
import Main from './pages/main';
import { browserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <browserRouter>
      <Routes>
        <Route path="/helloWorld" element={<HelloWorld />} />
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </browserRouter>
  );
}

export default App;

import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import GoogleLoginPage from './components/login/login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<GoogleLoginPage/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;

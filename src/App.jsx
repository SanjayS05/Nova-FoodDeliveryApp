import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './page/LandingPage';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </div>
  )
}

export default App

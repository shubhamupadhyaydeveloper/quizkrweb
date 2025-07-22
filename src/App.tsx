import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import PrivacyPolicyPage from './pages/privacy';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path='' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

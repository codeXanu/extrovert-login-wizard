import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TermsPage from "./pages/TermsPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage />} />

          <Route path="/terms" element={<TermsPage />} />

          <Route path= "/signup" element={<SignupPage />} />

          <Route path= "/home" element={<HomePage />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App;
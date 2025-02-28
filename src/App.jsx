import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import KeywordData from "./Components/ShowData/keywordData.jsx";

// import LoginPage from "./Components/Login&Registation/loginForm.jsx";
// import SignupPage from "./Components/Login&Registation/signupForm.jsx";
import Layout from "./Components/Layout.jsx";
import KeywordResearch from "./pages/relatedKeyword.jsx";
import LongTailKeyword from "./pages/LongTailKeyword.jsx";
import KeywordDifficulty from "./pages/keywordDifficulty.jsx";
import SpamScore from "./pages/SpamScore.jsx";
import WhatsTrending from "./pages/whatsTrending.jsx"; // Ensure correct import

const AppContent = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Layout className="w-full">
            <Routes>
              <Route path="/" element={<KeywordData />} />
              <Route path="/related-keywords" element={<KeywordResearch />} />
              <Route path="/long-tail-keywords" element={<LongTailKeyword />} />
              <Route path="/keyword-difficulty" element={< KeywordDifficulty/>} />
              <Route path="/trends" element={<WhatsTrending />} /> 
              <Route path="/spam-score" element={<SpamScore />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
}

export default App;

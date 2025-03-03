import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import KeywordData from "./Components/ShowData/keywordData.jsx";
import Layout from "./Components/Layout.jsx";
import KeywordResearch from "./pages/relatedKeyword.jsx";
import LongTailKeyword from "./pages/LongTailKeyword.jsx";
import KeywordDifficulty from "./pages/keywordDifficulty.jsx";
import SpamScore from "./pages/SpamScore.jsx";
import WhatsTrending from "./pages/whatsTrending.jsx";
import AudienceVolume from "./pages/AudienceVolume.jsx";


// PrivateRoute Component
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("jwt"); // Check for JWT token
  return token ? children : <Navigate to="/" replace />;
};

const AppContent = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Layout className="w-full">
            <Routes>
              <Route path="/" element={<KeywordData />} />
              <Route path="/related-keywords" element={<PrivateRoute><KeywordResearch /></PrivateRoute>} />
              <Route path="/long-tail-keywords" element={<PrivateRoute><LongTailKeyword /></PrivateRoute>} />             
              <Route path="/keyword-difficulty" element={<PrivateRoute><KeywordDifficulty /></PrivateRoute>} />              
              <Route path="/spam-score" element={<PrivateRoute><SpamScore /></PrivateRoute>} />
              <Route path="/trends" element={<PrivateRoute><WhatsTrending /></PrivateRoute>} />
              <Route path ="/audience-volume" element={<PrivateRoute><AudienceVolume /></PrivateRoute>} />
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

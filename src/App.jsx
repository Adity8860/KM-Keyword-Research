import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

import KeywordData from "./Components/ShowData/keywordData.jsx";

// import LoginPage from "./Components/Login&Registation/loginForm.jsx";
// import SignupPage from "./Components/Login&Registation/signupForm.jsx";
import Layout from "./Components/Layout.jsx";
import KeywordResearch from "./pages/KeywordResearch.jsx";

 

const AppContent = () => {
  return (
    <Routes>
      
     
 
      <Route
        path="*"
        element={
          <Layout className="w-full">
            <Routes>
               <Route path="/keyword-volume" element={<KeywordResearch />} />   
              <Route path="/" element={<KeywordData />} />
              {/* Add other routes here */}
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

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./Components/Navbar/navbar.jsx";
import Sidepanel from "./Components/SidePanel/sidePanel.jsx";
import KeywordData from "./Components/ShowData/keywordData.jsx";
import LandingPage from "./Components/LangingPage/landingPage.jsx";
import LoginPage from "./Components/Login&Registation/loginForm.jsx";
import SignupPage from "./Components/Login&Registation/registation.jsx";
import Layout from "./Components/Layout.jsx";

// Remove the duplicate Layout definition
// const Layout = ({ children }) => {
//   const location = useLocation();
//   const showSidepanel = !["/login", "/register"].includes(location.pathname);
//   const showNavbar = !["/login", "/register"].includes(location.pathname);

//   return (
//     <div>
//       {showNavbar && <Navbar />}
//       <div className="app flex flex-col md:flex-row h-screen">
//         {showSidepanel && <Sidepanel className="w-full md:w-1/4" />}
//         <div className="content-container flex-grow">{children}</div>
//       </div>
//     </div>
//   );
// };

const AppContent = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} /> 
      <Route path="/" element={<LandingPage />} />
      <Route
        path="*"
        element={
          <Layout className="w-full">
            <Routes>
             
              <Route path="/keyword-volume" element={<KeywordData />} />
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

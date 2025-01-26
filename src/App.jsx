import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
 
} from "react-router-dom";

import Navbar from "./Components/Navbar/navbar.jsx";
import Sidepanel from "./Components/SidePanel/sidePanel.jsx"; // Updated import statement
import KeywordData from "./Components/ShowData/keywordData.jsx";
import LoginPage from "./Components/Login&Registation/loginForm.jsx";
import RegistrationPage from "./Components/Login&Registation/registation.jsx";

// const PrivateRoute = () => (
//   <div className='flex flex-grow-1'>
//     <Sidepanel/>
//     <div className='flex-grow-1 h-screen overflow-y-auto'>
//       <Routes>
//         <Route path="/" element={<KeywordData/>} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegistrationPage />} />
//       </Routes>
//     </div>
//   </div>
// );  console.log("Current location:", location.pathname);

const AppContent = () => {
  const location = useLocation();
  const showSidepanel = !["/login", "/register"].includes(location.pathname);
  const showNavbar = !["/login", "/register"].includes(location.pathname);

  console.log("Current location:", location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      <div className="app flex flex-col md:flex-row h-screen">
        {showSidepanel && <Sidepanel className="w-full md:w-1/4" />}
        <div className={`content-container flex-grow`}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/" element={<KeywordData />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;

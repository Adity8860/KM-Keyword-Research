import React, { useEffect, useRef, useState } from "react";
import SignupPage from "./signupForm";

function LoginPage({ isVisible, onClose }) {
  const modalRef = useRef(null);
  const [transform, setTransform] = useState("scale(0)");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignupVisible, setSignupVisible] = useState(false); // State for signup visibility

  useEffect(() => {
    if (isVisible) {
      setTransform("scale(0)");
      setTimeout(() => {
        setTransform("scale(1)");
      }, 0);
    } else {
      setTransform("scale(1)");
      setTimeout(() => {
        setTransform("scale(0)");
      }, 0);
    }
  }, [isVisible]);

  const handleClose = () => {
    setTransform("scale(1)");
    setTimeout(() => {
      setTransform("scale(0)");
      setTimeout(onClose, 300); // Wait for the animation to complete before calling onClose
    }, 0);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGmailClick = () => {
    setSignupVisible(true);
  };

  const handleCloseSignup = () => {
    setSignupVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {isSignupVisible ? (
        <div>
          <div className="order-2 md:order-3 w-full grid justify-center item-center ">
            <SignupPage onClose={handleCloseSignup} />
          </div>
        </div>
      ) : (
        <div
          ref={modalRef}
          className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-4 sm:w-[60%] relative"
          style={{ transform, transition: "transform 0.3s ease-in-out" }}
        >
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500"
          >
            &times;
          </button>
          <h1
            className="text-2xl font-extrabold p-4 pl-9"
            style={{ wordSpacing: "7px" }}
          >
            Login to your Keyword Raja account and access all the free of cost
            services
          </h1>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0">
            <div className="w-full  sm:w-[25rem] sm:p-8 mb-8">
              <p className="mt-4 text-justify mb-2">
                SignIn with
                <a
                  href="#"
                  className="text-blue-500 ml-1.5"
                  onClick={handleGmailClick}
                >
                  Gmail
                </a>
              </p>
              <form>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Enter email or phone number"
                    className="p-3 bg-[#A1A1A1] border-none rounded-lg text-black w-full"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Enter a new password"
                    className="p-3 bg-[#A1A1A1] border-none rounded-lg text-black w-full"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </form>
              <p className="mt-4 text-justify">
                forgot password? Click
                <a href="#" className="text-blue-500">
                  Here
                </a>
              </p>
            </div>
          </div>
          <svg
            className="absolute right-0 bottom-0 hidden sm:block sm:mr-4 sm:mb-4"
            width="250"
            height="250"
            viewBox="0 0 360 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54.9577 182.394L2.36267 391.782C1.56966 394.939 3.95687 398 7.21202 398H352.001C355.867 398 359.001 394.866 359.001 391V0L234.236 195.991L183.814 100.814L109.115 240.666L54.9577 182.394Z"
              fill="#12153D"
            />
            <path
              d="M1 199V398H347.2C353.827 398 359.2 392.627 359.2 386V199L259.7 290.54L180.1 199L100.5 290.54L1 199Z"
              fill="#E5590F"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default LoginPage;

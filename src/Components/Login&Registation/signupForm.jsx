import React, { useState, useEffect } from "react";

function SignupPage({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    return () => setIsOpen(false);
  }, []);

  const handleSignup = () => {
    // Handle sign-up logic here
  };

  const handleGoogleSignup = () => {
    // Handle Google sign-up logic here
    console.log("Google button clicked");
  };

  const handleAppleSignup = () => {
    // Handle Apple sign-up logic here
    console.log("Apple button clicked");
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300); // Wait for the animation to complete before calling onClose
  };

  if (!isOpen) return null;

  return (
    <div className={`relative ${isOpen ? 'animate-zoomIn' : 'animate-zoomOut'}`}>
      <div
        className="bg-white p-8 rounded-lg w-full max-w-3xl"
        style={{
          borderRadius: "15px",
          background:
            "radial-gradient(80.98% 101.63% at 32.38% 48.5%, rgb(255, 255, 255) 52.19%, rgb(229, 89, 15) 82.56%, rgb(18, 21, 61) 100%)",
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-100"
        >
          &times;
        </button>
        <div className="absolute inset-0 opacity-50 pointer-events-none"></div>
        <div className="p-6 rounded-lg w-full max-w-md mx-auto mr-100">
          <h2 className="text-2xl font-bold mb-1">Create Account</h2>
          <p className="mb-6 text-md text-gray-500 text-bold">
            Grow your business like a Raja
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <button
              onClick={handleGoogleSignup}
              className="flex-1 cursor-pointer bg-gray-100 p-2 rounded-lg flex items-center justify-center"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 32 32"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
                  fill="#00ac47"
                />
                <path
                  d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
                  fill="#4285f4"
                />
                <path
                  d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
                  fill="#ffba00"
                />
                <polygon
                  fill="#2ab2db"
                  points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"
                />
                <path
                  d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
                  fill="#ea4435"
                />
                <polygon
                  fill="#2ab2db"
                  points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"
                />
                <path
                  d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"
                  fill="#4285f4"
                />
              </svg>
              Google
            </button>
            <button
              onClick={handleAppleSignup}
              className="flex-1 cursor-pointer bg-gray-100 p-2 rounded-lg flex items-center justify-center"
            >
              <svg
                width="20px"
                height="20px"
                viewBox="-1.5 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>apple [#173]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-102.000000, -7439.000000)"
                    fill="#000000"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                        id="apple-[#173]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              Apple
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Enter Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Create Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mr-2"
            />
            <label className="text-gray-700">
              I agree with privacy and policy
            </label>
          </div>
          <button
            onClick={handleSignup}
            className="w-full bg-blue-900 text-white p-2 rounded-lg"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

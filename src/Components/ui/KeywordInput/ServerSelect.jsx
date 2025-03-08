import React, { useState } from "react";
import GoogleIcon from "../../../assets/googleIcon.svg";
import Bing from "../../../assets/Bing.svg"

const ServerSelect = ({ onServerChange }) => { // Accept onServerChange callback
  const [selectedServer, setSelectedServer] = useState("Select");

  const servers = [
    {
      name: "Select Server",
      icon: null,
    },
    {
      name: "Google",
      icon: GoogleIcon,
    },
    {
      name:"Bing",
      icon: Bing
    }
  ];

  const handleChange = (event) => {
    const server = servers.find(s => s.name === event.target.value);
    setSelectedServer(server.name);
    onServerChange(server); // Call onServerChange with selected server
  };

  return (
    <div>
      <select
        className="p-1.5 rounded-xl text-[#12153d] font-light border border-gray-50 outline-none flex-grow appearance-none bg-no-repeat"
        id="server-select"
        value={selectedServer}
        onChange={handleChange}
        style={{
          backgroundColor: "#E5590F",
          textAlign: "center",
          backgroundImage: "none",
          width: "160px",
        }}
      >
        {servers.map((server) => (
          <option
            className="rounded-lg text-gray-500 font-light bg-white text-center text-sm"
            key={server.name}
            value={server.name}
          >
            {/* <img src={server.icon} alt={`${server.name} icon`} style={{ display: 'inline', marginRight: '8px' }} /> */}
            {server.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ServerSelect;

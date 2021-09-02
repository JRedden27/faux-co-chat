import { useState } from "react";
import axios from "axios";

import Logo from "../assets/FauxCoChat.png";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "f20f804d-3fd0-4fb4-9e55-302dc7da0f8d",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      // username | password => chatengine -> give messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      // works out -> logged in
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      // error -> try with new username ...
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <img
          src={Logo}
          alt="FauxCoChat Logo"
          style={{
            width: "300px",
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            marginBottom: "15px",
            borderRadius: "30px",
          }}
        />
        {/* <h1 className="title">FauxCoChat</h1> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

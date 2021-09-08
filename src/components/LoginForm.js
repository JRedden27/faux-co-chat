import { useState } from "react";
import axios from "axios";

import Logo from "../assets/FauxCoChat4b.png";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const [signUp, setSignUp] = useState("");

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

  const handleSignUp = () => {
    props.setSignUp(true);
    console.log(props);
  };

  return (
    <div className="wrapper">
      <div className="form">
        <img src={Logo} alt="FauxCoChat Logo" className="logo" />
        <h1 className="title">Log In</h1>
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
          <div
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              marginTop: "15px",
            }}
          >
            <span className="sign-up" style={{ color: "white" }}>
              Not a member?{" "}
              <span
                className="sign-up-link"
                style={{ color: "blue" }}
                onClick={handleSignUp}
              >
                Sign Up Today
              </span>
            </span>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

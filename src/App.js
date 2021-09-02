import { useState } from "react";
import { ChatEngine } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ChatFeed from "./components/ChatFeed";

import "./App.css";
// import { BoldOutlined } from "@ant-design/icons";

const App = () => {
  const [signUp, setSignUp] = useState("");

  const logOutHandler = () => {
    localStorage.setItem("username", "");
    window.location.reload(false);
  };

  if (!localStorage.getItem("username") && signUp) {
    return <SignUpForm signUp={signUp} setSignUp={setSignUp} />;
  } else if (!localStorage.getItem("username")) {
    return <LoginForm signUp={signUp} setSignUp={setSignUp} />;
  }

  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="f20f804d-3fd0-4fb4-9e55-302dc7da0f8d"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      <div style={{ contentAlign: "center" }}>
        <button
          type="submit"
          onClick={logOutHandler}
          style={{
            width: "80px",
            height: "50px",
            background: "lightblue",
            borderRadius: "15%",
            fontWeight: "bolder",
            margin: "10px",
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default App;

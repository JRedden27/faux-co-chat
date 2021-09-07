import { useState } from "react";
import { ChatEngine, ChatSettings } from "react-chat-engine";

import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import ChatFeed from "./components/ChatFeed";
import LogoutButton from "./components/LogoutButton";

import "./App.css";

const App = () => {
  const [signUp, setSignUp] = useState("");

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
        renderChatSettings={(chatAppProps) => (
          <div>
            <ChatSettings height="100vh" {...chatAppProps} />
            <LogoutButton />
          </div>
        )}
      />
    </div>
  );
};

export default App;

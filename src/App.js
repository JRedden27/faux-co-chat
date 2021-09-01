import React from "react";
import "./App.css";

import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="f20f804d-3fd0-4fb4-9e55-302dc7da0f8d"
      userName={"jredden"}
      userSecret={"secret123"}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;

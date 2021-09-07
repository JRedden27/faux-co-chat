import { deleteMessage } from "react-chat-engine";
import {useState, useEffect} from 'react'
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import {IsTyping} from "./IsTyping";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  let newMessages = messages;
  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          />
        )
    );
  };

  const deleteMessage = (message) => {
    //console.log('delete function', chatDelete.removeChild (messages[message.id]));
    const chatOut = document.getElementById("chatDelete")
    chatOut.removeChild (messages[message.id])
  }

  const renderMessages = () => {
    console.log('rerendered');
    const keys = Object.keys(newMessages);
    console.log('keys', keys);

    return keys.map((key, index) => {
      const message = newMessages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;


      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <>
              <span style={{color: 'red'}} onClick={() => {
                deleteMessage(newMessages[message.id])
                renderMessages()
              }}>X</span>
              <MyMessage message={message} />
              </>
            ) : (
              <TheirMessage
                message={message}
                lastMessage={message[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };


  if (!chat) return "Loading...";

  return (
    <div className="chat-feed">
      <div className="logo-container"></div>
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle" id="chatDelete">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <IsTyping userName={props.userName}/>

      <div style={{ height: "100px" }}></div>
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;

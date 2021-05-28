import React, { createContext, useContext, useState } from "react";
import Message from "./Message";

export const MessagesContext = createContext();
export const useDetails = () => {
  return useContext(MessagesContext);
};
const Chat = () => {
  const [userName, setUserName] = useState("mohan");
  return (
    <div>
      <MessagesContext.Provider value={{ userName, setUserName }}>
        <Message />
      </MessagesContext.Provider>
    </div>
  );
};

export default Chat;

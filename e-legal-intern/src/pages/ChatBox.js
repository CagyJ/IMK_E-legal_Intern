import React from "react";
import MessageInput from "../components/MessageInput";
import ChatContent from "../components/ChatContent";
import StyledButton from "../components/Button";
import styled from "styled-components";

const ChatBox = () => {
  const [qs, setQs] = React.useState("");
  const [chatContent, setChatContent] = React.useState(() => ["Hi, there!", "Hello, whatsup!", "Good, whatsup!"]);

  const getAns = (qs) => {
    console.log(qs);
    return "Good question, don't know yet!";
  };

  const addQs = () => {
    const newChatContent = [...chatContent, qs];
    setChatContent(newChatContent);
    setTimeout(() => {
      const ans = getAns(qs);
      setChatContent([...newChatContent, ans]);
    }, 1000);
  };

  return (
    <Wrapper className="flex flex-col w-screen h-screen text-center">
      <div className="w-screen h-1/6">Header</div>
      <div className="w-screen h-4/6 px-6">
        <ChatContent content={chatContent} />
      </div>

      <MessageInput className="w-screen h-1/6" question={qs} setQuestion={setQs} addQs={addQs} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
`;

export default ChatBox;

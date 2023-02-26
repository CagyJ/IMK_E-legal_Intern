import React from "react";
import MessageInput from "../components/MessageInput";
import ChatContent from "../components/ChatContent";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { query } from "../utils/openai";
import { useLocalStorageState } from "../utils/hooks";

const ChatBox = () => {
  const [qs, setQs] = React.useState("");
  const [warning, setWarning] = React.useState(false);
  const [chatContent, setChatContent] = useLocalStorageState('ChatHistory', ["Hi, there!", "Hello, whatsup!", "Good, whatsup!"]);
  const [isTyping, setIsTyping] = React.useState(false);
  const navigate = useNavigate();
    const addQs = async () => {
        const newChatContent = [...chatContent, qs]
        setChatContent(newChatContent)
        setIsTyping(true);
        const ans = await query({
            prompt: qs
        })
        setChatContent([...newChatContent, ans])
        setWarning(false)
        setIsTyping(false);
    }

  return (
    <Wrapper>
      <HeaderWrapper onClick={() => navigate("/")}>
        <div className="text-3xl">Lexi</div>
        <span className="indicator-item indicator-middle badge badge-secondary">online</span>
      </HeaderWrapper>
      <WarningWrapper>
        {warning && (
          <div className="alert alert-warning shadow-lg mt-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Be patient please, you did not get the answer of your last question!</span>
            </div>
          </div>
        )}
      </WarningWrapper>
      <ContentWrapper>
        <ChatContent isTyping={isTyping} content={chatContent} />
        <InputBoxWrapper>
          <MessageInput
            className="w-screen h-1/6"
            question={qs}
            setQuestion={setQs}
            addQs={addQs}
            chatContent={chatContent}
            setWarning={setWarning}
          />
        </InputBoxWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 99vh;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #f1f1f1;
  width: 100%;
  height: 50px;
  color: black;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  margin: 15px;
`;

const WarningWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50px;
  padding: 10px;
  z-index: 1000;
`;

const InputBoxWrapper = styled.div``;

export default ChatBox;

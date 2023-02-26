import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

const ChatContent = ({ content, isTyping }) => {
  const { botStyle } = useAppContext();
  const messagesEndRef = React.useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  React.useEffect(scrollToBottom, [content]);

  return (
    <Wrapper className="content">
      {content.map((con, idx) => {
        if (idx % 2 === 0) {
          return (
            <div className="chat chat-start" key={idx}>
              {botStyle === 0 ? (
                <div className="chat-bubble chat-bubble-error">{con}</div>
              ) : botStyle === 1 ? (
                <div className="chat-bubble chat-bubble-success">{con}</div>
              ) : (
                <div className="chat-bubble chat-bubble-primary">{con}</div>
              )}
            </div>
          );
        } else {
          return (
            <div className="chat chat-end" key={idx}>
              <div className="chat-bubble">{con}</div>
            </div>
          );
        }
      })}
      {isTyping && <TypingIndicatorWrapper className="text-slate-400">Lexi is typing ...</TypingIndicatorWrapper>}
      <div ref={messagesEndRef} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  height: 80vh;
  overflow: scroll;
`;

const TypingIndicatorWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 10px;
  align-items: center;
`;

export default ChatContent;

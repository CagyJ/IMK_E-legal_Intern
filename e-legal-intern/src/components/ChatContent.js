import styled from "styled-components";
import { useAppContext } from "../context/AppContext";

const ChatContent = ({ content }) => {
  const { botStyle } = useAppContext();

  return (
    <Wrapper>
      {content.map((con, idx) => {
        if (idx % 2 === 0) {
          return (
            <div className="chat chat-start" key={idx}>
              { botStyle === 0 ? <div className="chat-bubble chat-bubble-error">{con}</div>
                : (botStyle === 1 ? <div className="chat-bubble chat-bubble-success">{con}</div>
                    : <div className="chat-bubble chat-bubble-primary">{con}</div>)
              }
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
`;

export default ChatContent;

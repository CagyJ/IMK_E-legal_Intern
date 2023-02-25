import styled from "styled-components";

const ChatContent = ({ content }) => {
  return (
    <Wrapper>
      {content.map((con, idx) => {
        if (idx % 2 === 0) {
          return (
            <div className="chat chat-start">
              <div className="chat-bubble">{con}</div>
            </div>
          );
        } else {
          return (
            <div className="chat chat-end">
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

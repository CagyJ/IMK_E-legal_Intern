import React from "react";
import styled from "styled-components";
import StyledButton from "./Button";

const MessageInput = ({ question, setQuestion, addQs, chatContent, setWarning }) => {
  return (
    <Wrapper>
      <InputTextField
        type="text"
        placeholder="Type here"
        value={question}
        onChange={(v) => {
          setQuestion(v.target.value);
        }}
      />
      <StyledButton
        width={"150px"}
        className="btn gap-2 ml-5"
        onClick={() => {
          if (chatContent.length % 2 === 0) {
            setWarning(true);
            return;
          }
          addQs();
          console.log(question + "Send");
          setQuestion("");
        }}
        disabled={question === ""}
      >
        Send
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
`;

const InputTextField = styled.input`
  border-radius: 20px;
  width: 100%;
  background-color: #f1f1f1;
  transition: all 0.1s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: black;
  padding: 10px;

  :hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;

export default MessageInput;

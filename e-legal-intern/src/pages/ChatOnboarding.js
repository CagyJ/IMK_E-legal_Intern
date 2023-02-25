import styled from "styled-components";
import ChatAvatar from "../components/ChatAvatar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../components/Button";

export default function ChatOnboarding() {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ContentWrapper>
        <CenterBox>
          <ChatAvatar variant={"red"} selected={selected === 0} onClick={() => setSelected(0)} />
          <SubTitleText>Red</SubTitleText>
        </CenterBox>
        <CenterBox>
          <ChatAvatar variant={"green"} selected={selected === 1} onClick={() => setSelected(1)} />
          <SubTitleText>Green</SubTitleText>
        </CenterBox>
        <CenterBox>
          <ChatAvatar variant={"purple"} selected={selected === 2} onClick={() => setSelected(2)} />
          <SubTitleText>Purple</SubTitleText>
        </CenterBox>
      </ContentWrapper>
      <SubTitleText>Choose a Lexi style of your choice to continue</SubTitleText>
      <StyledButton onClick={() => navigate("/chat")}>Continue</StyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  height: 99vh;
  padding: 50px;
  background-color: white;
  border-radius: 20px;
  background: linear-gradient(195deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(253, 226, 253, 1));
`;

const CenterBox = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

const SubTitleText = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
`;

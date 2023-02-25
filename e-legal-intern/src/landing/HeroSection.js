import styled from "styled-components";
import { Button } from "@nextui-org/react";

export default function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <HeadingText>Look and reach beyond limits with Lexi.</HeadingText>
        <SubTitleText>
          Lexi is an AI chatbot that helps in something. Lexi is an AI chatbot that helps in something. Lexi
          is an AI chatbot that helps in something. Lexi is an AI chatbot that helps in something. Lexi is an
          AI chatbot that helps in something. Lexi is an AI chatbot that helps in something.
        </SubTitleText>
        <StyledButton>Get Started</StyledButton>
      </ContentWrapper>
      <ContentWrapper>
        <img src="/illus-1.png" width={"600px"} height={"600px"} alt=" " />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 600px auto;
  justify-content: space-between;
  padding: 25px;
  background-color: white;
  border-radius: 20px;
  min-height: 400px;
`;

const ContentWrapper = styled.div`
  display: grid;
`;

const HeadingText = styled.h1`
  font-size: 80px;
  font-weight: 600;
  line-height: 1;
`;

const SubTitleText = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
`;

const StyledButton = styled(Button)`
  background-color: black;
  color: white;
  height: 45px;
  width: 200px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`;

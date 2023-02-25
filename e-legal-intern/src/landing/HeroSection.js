import styled from "styled-components";
import StyledButton from "../buttons/Button";

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
        <StyledButton width={"150px"}>Get Started</StyledButton>
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
  color: black;
  line-height: 1;
`;

const SubTitleText = styled.p`
  font-size: 18px;
  color: black;
  font-weight: 300;
  line-height: 1.4;
`;

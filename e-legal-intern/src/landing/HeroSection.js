import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledButton from "../components/Button";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ContentWrapper>
        <HeadingText>
          Look and reach beyond limits with <i>Lexi</i>.
        </HeadingText>
        <SubTitleText>
          Lexi is a powerful AI Chatbot tool designed to assist individuals and businesses with legal matters. Using advanced natural language
          processing and machine learning algorithms, the chatbot can understand and respond to a wide range of legal questions and concerns.
        </SubTitleText>
        <StyledButton width={"150px"} onClick={() => navigate("/setbot")}>
          Get Started
        </StyledButton>
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

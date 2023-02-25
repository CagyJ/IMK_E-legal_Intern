import styled from "styled-components";
import DescriptionCard from "../components//DescriptionCard";

export default function DescriptionSection() {
  return (
    <Wrapper>
      <DescriptionCard variant={"first"}>
        <TitleText>Choose your preferred bot style</TitleText>
        <SubTitleText>With Lexi, you can choose up to three different bot styles of your choice.</SubTitleText>
      </DescriptionCard>
      <DescriptionCard variant={"second"}>
        <TitleText>Future plans</TitleText>
        <SubTitleText>
          <ol>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ol>
        </SubTitleText>
      </DescriptionCard>
      <DescriptionCard variant={"third"}>
        <TitleText>More about Lexi</TitleText>
        <SubTitleText>
          Our AI chatbot is available 24/7, so you can get the legal help you need at any time of day or night. It is also highly secure and
          confidential, so you can trust that your information is safe and protected.
        </SubTitleText>
      </DescriptionCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  border-radius: 20px;
`;

const TitleText = styled.h1`
  font-size: 30px;
  font-weight: 500;
`;

const SubTitleText = styled.p`
  font-size: 18px;
  font-weight: 200;
`;

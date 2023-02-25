import styled from "styled-components";
import DescriptionCard from "../components//DescriptionCard";

export default function DescriptionSection() {
  return (
    <Wrapper>
      <DescriptionCard variant={"first"}>
        <TitleText>Choose your preferred bot</TitleText>
        <SubTitleText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        </SubTitleText>
      </DescriptionCard>
      <DescriptionCard variant={"second"}>
        <TitleText>Find all legal stuff ...</TitleText>
        <SubTitleText>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        </SubTitleText>
      </DescriptionCard>
      <DescriptionCard variant={"third"}>
        <TitleText>About</TitleText>
        <SubTitleText>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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

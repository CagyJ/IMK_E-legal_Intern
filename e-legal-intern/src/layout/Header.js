import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <LogoText>Lexi</LogoText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  max-height: 50px;
  max-width: 80px;
  color: black;
`;

const LogoText = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

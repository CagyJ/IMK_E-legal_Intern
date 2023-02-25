import styled from "styled-components";

export default function DescriptionCard({ variant, children }) {
  return <Wrapper className={variant}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  min-height: 300px;
  backdrop-filter: blur(100px);
  transition: all 0.3s ease-in-out;
  color: black;

  &.first {
    background: linear-gradient(150deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(234, 235, 255, 1));
  }

  &.second {
    background: linear-gradient(195deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1), rgba(253, 226, 253, 1));
  }

  &.third {
    background: linear-gradient(60deg, #ffffff, rgba(247, 221, 255, 1));
  }

  :hover {
    box-shadow: rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.2) 0px 30px 60px -30px;
  }
`;

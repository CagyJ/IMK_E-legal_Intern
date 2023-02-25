import styled from "styled-components";

export default function ChatAvatar({ variant, selected, onClick }) {
  return (
    <Wrapper className={variant} selected={selected} onClick={onClick}>
      <ContentWrapper></ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  cursor: pointer;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  border: ${(props) => (props.selected ? "3px solid black" : "")};

  &.green {
    background: linear-gradient(327.45deg, #6a9b2b 13.96%, rgba(106, 155, 43, 0.56) 78.1%);
  }

  &.red {
    background: linear-gradient(327.45deg, #ee4545 13.96%, rgba(238, 69, 69, 0.5) 78.1%);
  }

  &.purple {
    background: linear-gradient(327.45deg, #ba68c8 13.96%, rgba(100, 69, 69, 0.5) 78.1%);
  }
  :hover {
    transform: scale(1.1);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

const ContentWrapper = styled.div``;

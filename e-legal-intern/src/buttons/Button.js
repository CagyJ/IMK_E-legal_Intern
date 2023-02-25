import styled from "styled-components";

export default function StyledButton({ children, onClick, width }) {
  return (
    <Wrapper onClick={onClick} width={width}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background-color: black;
  color: white;
  height: 45px;
  width: ${(p) => p.width ?? "300px"};
  border-radius: 15px;
  padding: 10px;
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }

  :active {
    transform: scale(0.98);
  }
`;

import styled from "styled-components";
import HeroSection from "../landing/HeroSection";
import Header from "../layout/Header";
import DescriptionSection from "../landing/DescriptionSection";
import Footer from "../layout/Footer";

const Landing = () => {

    return (
        <Wrapper>
            <Header />
            <HeroSection />
            <DescriptionSection />
            <Footer />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: space-around;
`;

export default Landing
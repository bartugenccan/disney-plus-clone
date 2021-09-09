import React from "react";

//Styled
import styled from "styled-components";

const LoginPage = () => {
  return (
    <Container>
      <Content>
        <ContentLogoOne src="/images/cta-logo-one.svg" />
        <SignUp href="https://www.preview.disneyplus.com/tr-tr">
          GET ALL THERE
        </SignUp>
        <Description>
          width: 100%; background-color: #0063e5; font-weight: bold; padding:
          17px 0; color: #f9f9f9; border-radius: 4px; text-align: center;
          font-size: 18px; cursor: pointer; transition: all 250ms; text-align:
          center; font-size: 18px; cursor: pointer; transition: all 250ms;
          letter-spacing: 1.5px; margin-top: 8px; margin-bottom: 12px;
        </Description>
        <ContentLogoTwo src="/images/cta-logo-two.png" alt=".." />
      </Content>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background: url("/images/login-background.jpg");
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
  }
`;

const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
`;

const ContentLogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  text-decoration: none;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  line-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const ContentLogoTwo = styled.img`
  width: 90%;
`;

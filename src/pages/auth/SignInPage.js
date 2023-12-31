import React from "react";
import TireLogo from "../../assets/images/login/TireLogo.jpg";
import Kakao from "../../assets/images/login/KakaoLogo.png"
import Naver from "../../assets/images/login/NaverLogo.png";
// import Google from "../../assets/images/login/GoogleLogo.png";
import styled from "styled-components";
import { redirect, useNavigate } from "react-router-dom";
import axios, { AxiosHeaders } from "axios";
import { async } from "q";
import GoogleIcon from "assets/images/login/GoogleIcon.png";

const Container = styled.div`
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 200px;
`

const TireLogoStyle = styled.img`
  width: 265px;
  height: 75px;
  margin: 0 auto;
  margin-bottom: 100px;
  cursor: pointer;
`

const BtnStyleWrapper = styled.div`
  flex-direction: column;
  margin-top: 20px;
  display: flex;
  align-items: center;
  margin-bottom:100px;
`
const LoginLogo = styled.a`
width: 250px;
height:57px;
padding: 10px;
margin-bottom:10px;
img {
  background: #E5E1E1;
  width: 100%;
  height: 100%;
}
`

const GoogleBtn = styled.a`
    display: flex;  
    align-items: center;
    border-radius: 4px;
    border: 1px solid rgba(111, 111, 111, 0.51);
    background: #FFF;
    width: 250px;
    height:57px;
    justify-content: center;
    margin-top: 10px;

`
const P = styled.p`
  color: #808080;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
`
const GoogleLogo = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 20px;
`

const OnNaverSignClick = async () => {
  // await axios({
  //   method: "get",
  //   url: "http://localhost:8080/auth/sign-in/naver",
  //   responseType: "string",
  //   withCredentials: true,
  // }).then(function (response) {
  //   window.open(response.data, "_blank", "noopener, noreferrer");
  // });
}
const OnKakaorSignClick = () => {
  axios.get("https://208d-175-119-150-172.ngrok-free.app/oauth2/authorization/kakao", { withCredentials: true });
}
const OnGoogleSignClick = () => {
  axios.get("https://208d-175-119-150-172.ngrok-free.app/oauth2/authorization/google", { withCredentials: true });
}

const SignInPage = () => {

  const movePage = useNavigate();

  function goMain() {
    movePage('/main');
  }


  return (
    <Container>
      <h1>더 이상 추천받지 않는 안전을 위하여,</h1>
      <TireLogoStyle src={TireLogo} alt="로고" onClick={goMain} />
      <BtnStyleWrapper><LoginLogo href="http://www.tireso.co.kr:8080/auth/sign-in/naver"><img src={Naver} /></LoginLogo>
        <LoginLogo href="백엔드 링크"><img src={Kakao} /></LoginLogo>
        <GoogleBtn href="백엔드 링크">
          <GoogleLogo src={GoogleIcon} alt="" />
          <P>Sign in with Google</P>
        </GoogleBtn>
      </BtnStyleWrapper>
    </Container>
  );
};

export default SignInPage;

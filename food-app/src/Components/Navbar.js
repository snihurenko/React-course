import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import signImg from '../image/sign.svg';

const NavbarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`;

const Button = styled.button`
    font-size: 12px;
    padding: 0 5px;
    border: none;
    margin: 5px;
    background: transparent;
    color: white;
`;

const LoginLogo = styled.img`
    width: 35px;
`;

export const Navbar = () => (
    <NavbarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>MrDonald's</H1>
        </Logo>
        <Login>
            <LoginLogo src={signImg} alt="sign"/>
            <Button>ВОЙТИ</Button>
        </Login>
    </NavbarStyled>
);
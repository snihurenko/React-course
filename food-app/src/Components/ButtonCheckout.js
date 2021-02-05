import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 50px;
    background-color: #299B01;
    color: white;
    font-family: inherit;
    font-size: 18px;
    border-color: transparent;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;

    &:hover{
        background-color: #fff;
        color: #299B01;
        border-color: #299B01;
    }
`;
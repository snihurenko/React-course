import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
    position: relative;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
`;

const Item = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const Name = styled.p`
    font-family: 'Pacifico', cursive;
    font-size: 30px;
`;

const Button = styled.button`
    position: absolute;
    width: 250px;
    height: 65px;
    left: 175px;
    top: 492px;
    background-color: #299B01;
    color: white;
    font-family: Roboto;
    font-size: 21px;
    border: none;
`;

export const ModalItem = ({openItem, setOpenItem}) => {
    function closeModal(e){
        if(e.target.id === 'overlay'){
            setOpenItem(null);
        }
    }

    if (!openItem) return null;
    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Item>
                    <Name>{openItem.name}</Name>
                    <Name>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</Name>
                </Item>
                <Button>Добавить</Button>
            </Modal>
        </Overlay>
    )
};

import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Order/ButtonCheckout';

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
    width: 500px;
    height: 500px;
    position: relative;
`;

const Banner = styled.div`
    width: 100%;
    height: 150px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 150px);
    padding: 20px;
`;

const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const Name = styled.p`
    font-family: 'Pacifico', cursive;
    font-size: 22px;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {
    const closeModal = (e) => {
        if(e.target.id === 'overlay'){
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    };

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <Banner img={openItem.img}/>
                <Content>
                    <HeaderContent>
                        <Name>{openItem.name}</Name>
                        <Name>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</Name>
                    </HeaderContent>
                    <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    )
};

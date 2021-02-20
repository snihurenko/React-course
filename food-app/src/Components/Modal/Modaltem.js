import React, { useContext} from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Order/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { Choices } from './Choices';
import { Context } from '../Functions/context';
import { Overlay } from '../Style/OrderStyle';

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

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ModalItem = () => {

    const {
        orders: {orders, setOrders}, 
        openItem: {openItem, setOpenItem}
    } = useContext(Context);

    const counter = useCount(openItem.count);
    const toppings = useToppings(openItem);
    const choices = useChoices(openItem);
    const isEdit = openItem.index > -1;

    const closeModal = (e) => {
        if(e.target.id === 'overlay'){
            setOpenItem(null);
        }
    };

    const order = {
        ...openItem,
        count: counter.count,
        topping: toppings.toppings, 
        choice: choices.choice
    };

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setOpenItem(null);
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
                        <Name>{formatCurrency(openItem.price)}</Name>
                    </HeaderContent>
                    <CountItem {...counter}/>
                    {openItem.toppings && <Toppings {...toppings}/>}
                    {openItem.choices && <Choices {...choices} openItem={openItem}/>}
                    <TotalPriceItem>
                        <span>Цена:</span>
                        <span>{formatCurrency(totalPriceItems(order))}</span>
                    </TotalPriceItem>

                    <ButtonCheckout 
                        onClick={isEdit ? editOrder : addToOrder} 
                        disabled={order.choices && !order.choice}
                    >
                        {isEdit ? 'Редактировать' : 'Добавить'}
                    </ButtonCheckout>
                </Content>
            </Modal>
        </Overlay>
    )
};

import React, { useContext} from 'react';
import styled from 'styled-components';
import { Overlay } from '../Style/OrderStyle';
import { OrderTitle, Total, TotalPrice } from '../Style/OrderStyle';
import { ButtonCheckout } from './ButtonCheckout';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';

const Modal = styled.div`
    background-color: white;
    width: 600px;
    padding: 30px;
`; 

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    itemname: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
            arr => arr.length ? arr : 'no topping'],
    choice:['choice', item => item ? item : 'no choices']
};

const sendOrder = (database, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData));
    database.ref('orders').push().set({
        nameClient: authentication.displayName,
        email: authentication.email,
        order: newOrder
    });
};

export const OrderConfirm = () => {

    const {
        orders: {orders, setOrders}, 
        auth: {authentication},
        orderConfirm: {setOpenOrderConfirm},
        database
    } = useContext(Context);

    const total = orders.reduce((result, order) => 
            totalPriceItems(order) + result, 0);

    return ( 
        <Overlay>
            <Modal>
                <OrderTitle>{authentication.displayName}</OrderTitle>
                <Text>Осталось только подтвердить ваш заказ</Text>
                <Total>
                    <span>Итого:</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout onClick={() => {
                    sendOrder(database, orders, authentication);
                    setOrders([]);
                    setOpenOrderConfirm(false);
                }}>
                    Подтвердить
                </ButtonCheckout>
            </Modal>
        </Overlay>
    );
}

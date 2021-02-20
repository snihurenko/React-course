import React, { useContext} from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/context';
import { OrderTitle, Total, TotalPrice } from '../Style/OrderStyle';

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0px;
    background-color: white;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 20px;
`;

const OrderContent = styled.div`
    flex-grow: 1;   
`;

const OrderList = styled.ul``;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = () => { 
    const {
        orders: {orders, setOrders}, 
        auth: {authentication, logIn},
        orderConfirm: {setOpenOrderConfirm}
    } = useContext(Context);

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };

    const total = orders.reduce((result, order) => 
            totalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order) => 
            order.count + result, 0);

    return (
        <OrderStyled>
            <OrderTitle>Ваш Заказ</OrderTitle>
            <OrderContent>
                {orders.length ? 
                <OrderList>
                    {orders.map((order, index) => <OrderListItem 
                        key={index}
                        order={order} 
                        deleteItem={deleteItem}
                        index={index}
                    />)}
                </OrderList> :
                <EmptyList>Список заказов пуст</EmptyList>}
            </OrderContent>
            {orders.length ? 
            <>
                <Total>
                    <span>Итого</span>
                    <span>{totalCounter}</span>
                    <TotalPrice>{formatCurrency(total)}</TotalPrice>
                </Total>
                <ButtonCheckout onClick={() => {
                    authentication ? setOpenOrderConfirm(true) : logIn()
                }}>
                    Оформить
                </ButtonCheckout>
            </>
            : null
            }
            
        </OrderStyled>
    )
};
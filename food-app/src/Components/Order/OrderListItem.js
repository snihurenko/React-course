import React from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Toppings = styled.div`
    font-size: 12px;
    color: grey;
    width: 100%;
`;

export const OrderListItem = ({ order }) => {
    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name).join(', ');

    return (
        <OrderItemStyled>
            <ItemName>
                {order.name}
            </ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton/>
            {topping && <Toppings>{topping}</Toppings>}
        </OrderItemStyled>
    )
};
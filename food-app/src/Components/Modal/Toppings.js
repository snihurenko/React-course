import React from 'react';
import styled from 'styled-components';
import { SuplementsWrap, SuplementsLabel } from './Suplements';

const ToppingCheckbox = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export const Toppings = ({toppings, checkToppings}) => {
    return ( 
        <>
            <h3>Добавки</h3>
            <SuplementsWrap>
                {toppings.map((item, i) => (
                    <SuplementsLabel key={i}>
                        <ToppingCheckbox 
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => checkToppings(i)}
                        />
                        {item.name}
                    </SuplementsLabel>
                ))}
            </SuplementsWrap>
        </>
    );
}

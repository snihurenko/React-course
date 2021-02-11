import React from 'react';
import styled from 'styled-components';
import { SuplementsWrap, SuplementsLabel } from './Suplements';

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

export const Choices = ({ openItem, choice, changeChoices }) => {
    return ( 
        <>
            <h3>Выбирайте:</h3>
            <SuplementsWrap>
                {openItem.choices.map((item, i) => (
                    <SuplementsLabel key={i}>
                        <ChoiceRadio 
                            type="radio"
                            name="choices"
                            checked={choice === item}
                            value={item}
                            onChange={changeChoices}
                        />
                        {item}
                    </SuplementsLabel>
                ))}
            </SuplementsWrap>
        </>
    );
}

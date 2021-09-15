import React, { useState } from 'react';
import { InputContainer, StyledInput } from './MoneyInput.styles';
import { MoneyInputProps } from './MoneyInput.types';

const MoneyInput: React.FC<MoneyInputProps> = ({ setMoney, name, type, text }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setMoney(Number(e.target.value));
    };

    return (
        <div>
            <InputContainer>
                <h3>{text}</h3>
                <StyledInput name={name} type={type} onChange={handleInput} value={inputValue} />
            </InputContainer>
        </div>
    );
};

export default MoneyInput;

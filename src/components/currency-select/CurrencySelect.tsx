import React from 'react';
import { Currency } from '../../App.types';
import { SelectContainer } from './CurrencySelect.styles';
import { CurrencySelectProps } from './CurrencySelect.types';

const CurrencySelect: React.FC<CurrencySelectProps> = ({ rates, setSelectedCurrency }) => {
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (rates) {
            setSelectedCurrency(rates.filter((rate) => rate.label === e.target.value)[0]);
        }
    };
    const localStorageTemp = localStorage.getItem('state');
    const localStorageItem = localStorageTemp ? JSON.parse(localStorageTemp) : {};
    const favourites = localStorageItem.favourites || [];

    const displaySelectOptions = (options: Currency[]) => {
        return options
            .sort((a, b) => favourites.indexOf(b.label) - favourites.indexOf(a.label))
            .map((option) => {
                return (
                    <option key={option.label} value={option.label}>
                        {`${option.label} ${favourites.includes(option.label) ? '[fav]' : ''}`}
                    </option>
                );
            });
    };

    return (
        <SelectContainer>
            <h3>Currencies</h3>
            <select onChange={handleSelect} defaultValue={''}>
                <option value={''} disabled>
                    Select currency
                </option>
                {rates ? displaySelectOptions(rates) : ''}
            </select>
        </SelectContainer>
    );
};

export default CurrencySelect;

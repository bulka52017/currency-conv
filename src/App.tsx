import React, { useState, useEffect } from 'react';
import { AppContainer } from './App.styles';
import { Currency, CurrencyResponse } from './App.types';
import HalfPage from './components/half-page/HalfPage';
import MoneyInput from './components/money-input/MoneyInput';
import axios from 'axios';
import CurrencySelect from './components/currency-select/CurrencySelect';
import ConvertedCurrency from './components/converted-currency/ConvertedCurrency';

const App: React.FC = () => {
    const [money, setMoney] = useState(0);
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null);

    useEffect(() => {
        axios.get<CurrencyResponse>('https://api.frankfurter.app/latest?base=PLN').then((res) => {
            const currenciesArr = Object.entries(res.data.rates).map((item) => {
                return { rate: item[1], label: item[0] };
            });
            setCurrencies(currenciesArr);
        });
    }, []);

    return (
        <AppContainer>
            <HalfPage>
                <MoneyInput
                    setMoney={setMoney}
                    type='number'
                    name='money'
                    text='Enter value (PLN)'
                />
            </HalfPage>

            <HalfPage>
                <CurrencySelect rates={currencies} setSelectedCurrency={setSelectedCurrency} />
                <ConvertedCurrency
                    rate={selectedCurrency?.rate}
                    amount={money}
                    label={selectedCurrency?.label}
                />
            </HalfPage>
        </AppContainer>
    );
};

export default App;

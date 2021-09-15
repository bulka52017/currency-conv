import { Currency } from '../../App.types';

export interface ConvertedCurrencyProps {
    amount: number;
    rate: number | undefined;
    label: string | undefined;
}

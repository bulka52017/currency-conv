import { Currency } from '../../App.types';

export interface CurrencySelectProps {
    rates: Currency[] | null;
    setSelectedCurrency: React.Dispatch<React.SetStateAction<Currency | null>>;
}

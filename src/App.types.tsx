export interface Currency {
    label: string;
    rate: number;
}

export interface CurrencyResponse {
    base: string;
    amount: number;
    date: string;
    rates: object;
}

import React, { useEffect } from 'react';
import { ConvertedCurrencyContainer } from './ConvertedCurrency.styles';
import { ConvertedCurrencyProps } from './ConvertedCurrency.types';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../redux';

const ConvertedCurrency: React.FC<ConvertedCurrencyProps> = ({ rate, label, amount }) => {
    const dispatch = useDispatch();

    const { addToFavourites, removeFromFavourites } = bindActionCreators(actionCreators, dispatch);
    const favourites = useSelector((state: State) => state.favourites);
    const state = useSelector((state: State) => state);

    const handleClick = (type: string, label: string) => {
        if (type === 'add') {
            addToFavourites(label);
        }

        if (type === 'remove') {
            removeFromFavourites(label);
        }
    };

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify({ ...state, favourites: favourites }));
    }, [favourites, state]);

    return (
        <ConvertedCurrencyContainer>
            {label && rate && amount !== 0 ? (
                <>
                    <span>Selected currency {label}</span>

                    <div>
                        <button onClick={() => handleClick('add', label)}>Add to favourites</button>
                        <button onClick={() => handleClick('remove', label)}>
                            Remove from favourites
                        </button>
                    </div>

                    <br></br>
                    <span>
                        {`${amount} x ${rate} = `}
                        <b>{`${(amount * rate).toFixed(2)} ${label}`}</b>
                    </span>
                </>
            ) : (
                ''
            )}
            {!amount ? <h3>Enter value</h3> : ''}
            {!label ? <h3>Select currency</h3> : ''}
        </ConvertedCurrencyContainer>
    );
};

export default ConvertedCurrency;

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const CurrencyForm = (props) => {
    const { dispatch, currency  } = useContext(AppContext);

    const ChangeCurrency = (mycurrency) => {
    
        let currency = {mycurrency};
        dispatch({
            type: 'SET_CURRENCY',
            payload: mycurrency
        });
    };

    return (
        <div className='alert alert-secondary' style={{ marginLeft: '2rem' }}>
            <select  className="custom-select"  id="inputGroupSelect03" onChange={(event) => ChangeCurrency(event.target.value)}>
                <option defaultValue value="£" name="Pound">£ Pound</option>
                <option value="$" name="USDollar">$ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="µ" name="Ruppee">µ Ruppee</option>
            </select>

        </div>
    )
};

export default CurrencyForm;
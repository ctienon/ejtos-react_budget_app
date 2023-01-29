import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from '../components/ExpenseTotal'

const Budget = (props) => {
    const { budget } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { remaining } = useContext(AppContext);

    const UpdateBudget = (amount) => {
        
        if (amount > 20000) {
            alert('The budget cannot exceed 20 000 £');
            return;
        } 
        if( remaining <= 0 ) {
            alert('The budget cannot be lower than the spending');
            return;

        } else {
           let budget = {amount};
        }
    
        dispatch({
            type: 'SET_BUDGET',
            payload: amount
        });
    };
   
    return (
        <div className='alert alert-secondary'>
            <label>Budget ({currency}):</label>
            <input
                required='required'
                type='number'
                id='cost'
                step ='10'
                value={budget}
                style={{ marginLeft: '2rem' , size: 10}}
                onChange={(event) => UpdateBudget(event.target.value)}>
            </input>
        </div>
    );
};

export default Budget;

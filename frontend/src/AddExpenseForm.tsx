import React from 'react';
import Expense from './datatypes/ExpenseInterface';
import { TextField } from '@mui/material';

interface ExpenseFormProps {
    onSubmit: (expense: Expense) => void;
}

const AddExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add your form validation logic here
        const expense = {
            title: event.target?.title.value,
            description: event.target?.description.value,
            amount: parseFloat(event.target?.amount.value),
            date: new Date(event.target?.date.value),
        };
        onSubmit(expense);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <div>
                <label htmlFor='title'>Title:</label>
                <input type='text' id='title' name='title' required />
            </div>
            <div>
                <label htmlFor='description'>Description:</label>
                <input type='text' id='description' name='description' required />
            </div>
            <div>
                <label htmlFor='amount'>Amount:</label>
                <input type='number' id='amount' name='amount' required />
            </div>
            <div>
                <label htmlFor='date'>Date:</label>
                <input type='date' id='date' name='date' required />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default AddExpenseForm;
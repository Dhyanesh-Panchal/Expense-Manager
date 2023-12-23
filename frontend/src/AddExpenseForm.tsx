import React from 'react';
import Expense from './datatypes/ExpenseInterface';
import { TextField } from '@mui/material';

interface ExpenseFormProps {
    onSubmit: (expense: Expense) => void;
}
// --> react hook form ??
const AddExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Add your form validation logic here
        const expense = {
            // @ts-ignore
            title: event.target?.title.value,
            // @ts-ignore
            description: event.target?.description.value,
            // @ts-ignore
            amount: parseFloat(event.target?.amount.value),
            // @ts-ignore
            date: new Date(event.target?.date.value),
        };
        onSubmit(expense);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField id="title" name='title' label="Title" variant="outlined" />
            <TextField id="description" type='text-box' name='description' label="Description" variant="outlined" />
            <TextField id="amount" type='number' name='amount' label="Amount" variant="outlined" />
            <TextField id="date" type='date' name='date' label="Date" variant="outlined" />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default AddExpenseForm;
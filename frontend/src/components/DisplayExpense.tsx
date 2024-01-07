import React from 'react';
import Expense from '../datatypes/ExpenseInterface';
import { Grid } from '@mui/material';
import ExpenseCard from './ExpenseCard'; // Assuming this is the correct import path


interface DisplayExpenseProps {
    expenses: Expense[];
}

const DisplayExpense: React.FC<DisplayExpenseProps> = ({ expenses }) => {

    return (
        <Grid container spacing={2}>
            {expenses.map((expense, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <ExpenseCard expense={expense} />
                </Grid>
            ))}
        </Grid>
    );
};

export default DisplayExpense;
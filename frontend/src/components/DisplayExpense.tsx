import React from 'react';
import Expense from '../datatypes/ExpenseInterface';
import { Grid } from '@mui/material';
import ExpenseCard from './ExpenseCard';

interface DisplayExpenseProps {
    expenses: Expense[];
}

const DisplayExpense: React.FC<DisplayExpenseProps> = ({ expenses }) => {
    return (
        // The spacing on the Grid container adds space around the items.
        // Setting it to zero should remove the spacing between items.
        // Additionally, I'm removing any margin that may be added by the Card.
        <Grid container spacing={0}>
            {expenses.map((expense, index) => (
                <Grid item key={index} xs={12}>
                    <ExpenseCard expense={expense} />
                </Grid>
            ))}
        </Grid>
    );
};

export default DisplayExpense;
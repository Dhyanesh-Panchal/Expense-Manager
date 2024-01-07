// ExpenseCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';
import Expense from '../datatypes/ExpenseInterface';

interface ExpenseCardProps {
    expense: Expense;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense }) => {
    const income = expense.amount > 0; // Assuming a positive amount indicates income
    return (
        <Card sx={{ display: 'flex', marginBottom: 2 }}>
            <Avatar sx={{ bgcolor: income ? 'green' : 'red', alignSelf: 'center', marginLeft: 1 }}>
                {/* You can put the first letter of the expense type or any icon here */}
                E
            </Avatar>
            <CardContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
                <Grid>
                    <Typography variant="subtitle1">{expense.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                        {expense.date.toLocaleDateString()} at {expense.date.toLocaleTimeString()}
                    </Typography>
                </Grid>
                <Typography variant="subtitle1" color={income ? 'green' : 'red'}>
                    ₹{expense.amount.toFixed(2)}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ExpenseCard;
// ExpenseCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Expense from '../datatypes/ExpenseInterface';

interface ExpenseCardProps {
    expense: Expense;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {expense.title}
                </Typography>
                <Typography color="textSecondary">
                    {expense.date.toLocaleDateString()}
                </Typography>
                <Typography variant="body2" component="p">
                    {expense.description}
                </Typography>
                <Typography variant="body1">
                    Amount: ₹{expense.amount.toFixed(2)}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ExpenseCard;
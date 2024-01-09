// ExpenseCard.tsx

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Expense from '../datatypes/ExpenseInterface';

interface ExpenseCardProps {
    expense: Expense;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense }) => {
    const income = expense.amount > 0;
    return (
        <Card sx={{ marginBottom: 1 }}>
            <CardContent sx={{ padding: '8px 16px', "&:last-child": { paddingBottom: '8px' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                            {expense.title}
                        </Typography>
                        <Typography variant="body1" color={income ? 'green' : 'red'}>
                            {income ? '+ ' : '- '}
                            ₹{Math.abs(expense.amount).toFixed(2)}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" align="right">
                        {new Date(expense.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ExpenseCard;

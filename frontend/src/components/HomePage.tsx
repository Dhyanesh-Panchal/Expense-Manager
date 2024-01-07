// HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import DisplayExpense from './DisplayExpense'; // Assuming this is the correct import path
import Expense from '../datatypes/ExpenseInterface';

interface HomePageProps {
    expenses: Expense[];
}

const HomePage: React.FC<HomePageProps> = ({ expenses }) => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/add-expense');
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleAddClick}>
                Add Expense
            </Button>
            <DisplayExpense expenses={expenses} />
        </div>
    );
};

export default HomePage;

import React from 'react';
import Expense from './datatypes/ExpenseInterface';

interface DisplayExpenseProps {
    expenses: Expense[];
}

const DisplayExpense: React.FC<DisplayExpenseProps> = ({ expenses }) => {

    return (
        <div>
            {
                expenses.map((expense, index) => {
                    return (
                        <div key={index}>
                            <h2>{expense.title}</h2>
                            <p>{expense.description}</p>
                            <p>Amount: {expense.amount.toFixed(2)}</p>
                            <p>Date: {expense.date.toLocaleDateString()}</p>
                        </div>)
                })
            }
        </div>
    );
};

export default DisplayExpense;
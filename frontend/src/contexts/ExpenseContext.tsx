// src/contexts/ExpenseContext.tsx (Create this new file inside a 'contexts' folder)

import React, { createContext, useState, ReactNode } from 'react';
import Expense from '../datatypes/ExpenseInterface';

interface ExpenseContextProps {
    expenses: Expense[];
    addExpense: (newExpense: Expense) => void;
}

// Provide an initial value that matches the structure of ExpenseContextProps
const initialContextValue: ExpenseContextProps = {
    expenses: [],
    addExpense: () => { }, // No-op default function
};

export const ExpenseContext = createContext<ExpenseContextProps>(initialContextValue);

interface ExpenseProviderProps {
    children: ReactNode;
}

export const ExpenseProvider: React.FC<ExpenseProviderProps> = ({ children }) => {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    const addExpense = (newExpense: Expense) => {
        setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    };

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};

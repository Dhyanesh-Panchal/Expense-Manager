import React, { useState } from 'react';
import AddExpenseForm from './AddExpenseForm';
import Expense from './datatypes/ExpenseInterface';
import DisplayExpense from './DisplayExpense';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  spacing: 2
});

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);


  const handleAddExpense = (newexpense: Expense) => {
    setExpenses([...expenses, newexpense])
    console.log('Total Expenses', expenses);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <div className="expense-form">
          <AddExpenseForm onSubmit={handleAddExpense} />
        </div>
        <DisplayExpense expenses={expenses} />
      </div>
    </ThemeProvider>
  )
};

export default App;

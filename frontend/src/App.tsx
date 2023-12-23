import React, { useState } from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import Expense from './datatypes/ExpenseInterface';
import DisplayExpense from './components/DisplayExpense';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/mainTheme';
import Header from './components/TopHeader';


const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);


  const handleAddExpense = (newexpense: Expense) => {
    setExpenses([...expenses, newexpense])
    console.log('Total Expenses', expenses);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Header />
        <AddExpenseForm onSubmit={handleAddExpense} />
        <DisplayExpense expenses={expenses} />
      </div>
    </ThemeProvider>
  )
}

export default App;

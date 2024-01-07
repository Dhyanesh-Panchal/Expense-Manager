import React, { useState } from 'react';
import AddExpenseForm from './components/AddExpenseForm';
import Expense from './datatypes/ExpenseInterface';
import DisplayExpense from './components/DisplayExpense';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/mainTheme';
import Header from './components/TopHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';



const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);


  const handleAddExpense = (newexpense: Expense) => {
    setExpenses([...expenses, newexpense])
    console.log('Total Expenses', expenses);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage expenses={expenses} />} />
          <Route path="/add-expense" element={<AddExpenseForm onSubmit={handleAddExpense} />} />
          <Route path="/expenses" element={<DisplayExpense expenses={expenses} />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;

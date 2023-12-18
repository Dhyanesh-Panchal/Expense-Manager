import React, { useState } from 'react';
import AddExpenseForm from './AddExpenseForm';
import Expense from './datatypes/ExpenseInterface';
import DisplayExpense from './DisplayExpense';

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);


  const handleAddExpense = (newexpense: Expense) => {
    setExpenses([...expenses, newexpense])
    console.log('Total Expenses', expenses);
  };
  return (
    <div>
      <h1>Expense Manager</h1>
      <AddExpenseForm onSubmit={handleAddExpense} />
      <DisplayExpense expenses={expenses} />
    </div>
  )
};

export default App;

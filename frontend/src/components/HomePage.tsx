// src/components/HomePage.tsx

import React, { useState, useContext } from 'react';
import { Fab, Tooltip, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import DisplayExpense from './DisplayExpense';
import AddExpenseForm from './AddExpenseForm';
import { ExpenseContext } from '../contexts/ExpenseContext'; // Update this import path to where your ExpenseContext is

const HomePage: React.FC = () => {
    const { expenses, addExpense } = useContext(ExpenseContext); // Use the context
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <DisplayExpense expenses={expenses} />
            <Tooltip title="Add Expense" aria-label="add">
                <Fab color="secondary" style={{ position: 'fixed', bottom: 56, right: 26 }} onClick={handleClickOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Add Expense
                    <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close" sx={{ position: 'absolute', right: 8, top: 8 }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <AddExpenseForm onSubmit={(newExpense) => {
                        addExpense(newExpense);
                        handleClose(); // Close the dialog after submitting the form
                    }} />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default HomePage;

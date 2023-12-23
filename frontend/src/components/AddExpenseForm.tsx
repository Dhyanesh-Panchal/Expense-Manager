import React, { useState } from 'react';
import Expense from '../datatypes/ExpenseInterface';
import { Typography, Container, Paper, Grid, TextField, Button } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface ExpenseFormProps {
    onSubmit: (expense: Expense) => void;
}
// --> react hook form ??
const AddExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {

    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newExpense: Expense = {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            amount: parseFloat(formData.get('amount') as string),
            date: selectedDate ?? new Date(), // Use the selected date or default to a new date if null
        };
        onSubmit(newExpense);
    };

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
                <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
                    Add Expense
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField
                                id="title"
                                name="title"
                                label="Title"
                                variant="outlined"
                                fullWidth
                                size="small"
                                sx={{ '& .MuiInputBase-root': { fontSize: '0.875rem' } }}
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="description"
                                name="description"
                                label="Description"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                size="small"
                                sx={{ '& .MuiInputBase-root': { fontSize: '0.875rem' } }}
                                required
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id="amount"
                                name="amount"
                                label="Amount"
                                variant="outlined"
                                fullWidth
                                type="number"
                                size="small"
                                sx={{ '& .MuiInputBase-root': { fontSize: '0.875rem' } }}
                                required
                            />
                        </Grid>
                        <Grid item>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Date"
                                    value={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    renderInput={(params) => <TextField {...params} required size="small" />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};


export default AddExpenseForm;
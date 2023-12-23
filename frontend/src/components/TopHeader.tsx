import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Header: React.FC = () => {
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="md">
                <Toolbar>
                    <Typography variant="h6" color="inherit" component="div">
                        Expense Manager
                    </Typography>
                    {/* If you have additional header buttons or icons, they can be added here */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;

import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';


const Header: React.FC = () => {
    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="md">
                <Toolbar>
                    <Typography variant="h6" color="inherit" component="div">
                        <Link component={RouterLink} to="/" underline="none" color="inherit">
                            Expense Manager
                        </Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;

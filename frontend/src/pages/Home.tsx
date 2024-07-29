import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                background: 'url("/background.jpg") no-repeat center center fixed',
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to cook-E
                </Typography>
                <Typography variant="h5" component="p">
                    Your personal online recipe book.
                </Typography>
            </Container>
        </Box>
    );
};

export default Home;

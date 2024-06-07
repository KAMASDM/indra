import React from 'react';
import { Container, CardContent, Box, Typography } from '@mui/material';
import styled from '@mui/system/styled';
import Card from '@mui/material/Card';
import logo from '../../assets/logo.png';
import Stack from '@mui/material/Stack';

const Cards = ({ title, subtitle, description }) => {

    const StyledCard = styled(Card)(({ theme }) => ({
        width: '100%',
        maxWidth: '800px',
        marginTop: theme.spacing(-10),
        borderRadius: '16px',
        boxShadow: theme.palette.mode === 'light'
            ? '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
            : '0 1px 3px rgba(0, 0, 0, 0.72), 0 1px 2px rgba(0, 0, 0, 0.54)',
        backdropFilter: 'blur(24px)',
        backgroundColor: theme.palette.mode === 'light'
            ? 'rgba(255, 255, 255, 0.6)'
            : 'rgba(0, 0, 0, 0.6)',
    }));
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 2, sm: 4 },
                pb: { xs: 2, sm: 4 },
            }}
        >
            <StyledCard>
                <CardContent>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 2 }}>
                        <img src={logo} alt="Indraprasth Foundation Logo" style={{ height: 150, marginTop: 8 }} />
                        <Stack
                            spacing={2}
                            alignItems="center"
                            useFlexGap
                            sx={{ width: { xs: '100%', sm: '70%' }, mt: 1 }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                                    textAlign: 'center',
                                }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                component="span"
                                variant="h1"
                                sx={{
                                    fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                                    color: (theme) =>
                                        theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                    textAlign: 'center',
                                }}
                            >
                                {subtitle}
                            </Typography>
                            <Typography
                                textAlign="center"
                                color="text.secondary"
                                sx={{ width: { sm: '100%', md: '80%' } }}
                            >
                                {description}
                            </Typography>
                        </Stack>
                    </Box>
                </CardContent>
            </StyledCard>
        </Container>
    );
};

export default Cards;

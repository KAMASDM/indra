import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

import logo from '../../assets/logo.png';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://indraprasthfoundation.org/">Indraprasth Foundation&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.7)',
        py: { xs: 8, sm: 3 },
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, sm: 8 },
          textAlign: { sm: 'center', md: 'left' },
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: '800px',
            borderRadius: '16px',
            boxShadow: (theme) => theme.shadows[3],
            backdropFilter: 'blur(24px)',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.6)'
                : 'rgba(0, 0, 0, 0.6)',
            mb: 4,
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <img src={logo} alt="Indraprasth Foundation Logo" style={{ height: 100 }} />
              <Stack
                spacing={2}
                alignItems="center"
                useFlexGap
                sx={{ width: { xs: '100%', sm: '70%' }, mt: 1 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                    textAlign: 'center',
                  }}
                >
                  Indraprasth Foundation
                </Typography>
                <Typography
                  component="span"
                  variant="h5"
                  sx={{
                    fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                    color: (theme) =>
                      theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                    textAlign: 'center',
                  }}
                >
                  Charitable Trust
                </Typography>
                <Typography
                  textAlign="center"
                  color="text.secondary"
                  sx={{ width: { sm: '100%', md: '80%' } }}
                >
                  By harnessing the collective power of visionaries, volunteers, and supporters, we strive to make Vadodara a beacon of hope, prosperity, and unity for all.
                </Typography>
              </Stack>
            </Box>
          </CardContent>
        </Card>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <div>
            <Copyright />
          </div>
        </Box>
      </Container>
    </Box>
  );
}

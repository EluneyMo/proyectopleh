import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import purple from '@mui/material/colors';
import { Palette } from '@mui/material/styles';
const GradientButton = styled(Button)(({ theme }) => ({
    background: `linear-gradient(to right, purple, purple)`,
    border: '1px solid',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        background: `linear-gradient(to right,  purple, purple)`,
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        background: `linear-gradient(to right, purple, purple)`,
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
}));

interface CustomizedButtonsProps {
    onSelect: (categoria: string) => void;
}

const CustomizedButtons: React.FC<CustomizedButtonsProps> = ({ onSelect }) => {
    const handleButtonClick = (categoria: string) => {
        onSelect(categoria);
    };

    return (
        <Stack spacing={5} direction="row">
            <GradientButton variant="contained" onClick={() => handleButtonClick('psicologos')}  >
                Psicólogos
            </GradientButton>

            <GradientButton variant="contained" onClick={() => handleButtonClick('comisarias')}>
                Comisarías
            </GradientButton>
        </Stack>
    );
};

export default CustomizedButtons;

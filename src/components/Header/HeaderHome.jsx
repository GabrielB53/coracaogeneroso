import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const HeaderHome = ({ goto, title }) => {
    const navigate = useNavigate();

    const vaipara = () => {
        navigate(goto); 
    };

    return (
        <div className="p-3 border-bottom shadow rounded">
            <Box 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    width: '100%',
                    height:'100%' 
                }}
            >
                <Button 
                    onClick={vaipara} 
                    variant="contained" 
                    color="error"
                    className="fw-medium shadow"
                >
                    Voltar
                </Button>
                <span className="fw-bold h2" style={{ flexGrow: 1, textAlign: 'center' }}>{title}</span>
                <Avatar sx={{ bgcolor: 'error.main' }}> 
                    <HomeIcon />
                </Avatar>
            </Box>
        </div>
    );
};

export default HeaderHome;

import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import iconImage from "../Images/iconImage.png"

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: 'black',
    marginRight: theme.spacing(2),
}));

const WhiteAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: 'white',
}));

const pages = ['About', 'contact','Blog', 'Terms', 'Privacy'];

export default function PrimarySearchAppBar() {
   

    return (
        <Box sx={{ flexGrow: 1 }}>
            <WhiteAppBar position="static">
                <Toolbar>
                    <Avatar
                        alt="Logo"
                        src={iconImage}
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1,
                            width: 40,
                            height: 40,
                        }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#121212',
                            textDecoration: 'none',
                        }}
                    >
                        ValueFolks
                    </Typography>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        {pages.map((page, index) => (
                            <Typography
                                key={index}
                                variant="body2"
                                sx={{ color: '#121212', margin: '0 10px',paddingLeft:'5%' }}
                            >
                                {page}
                            </Typography>
                        ))}
                    </div>

                    <StyledIconButton>
                        <FaFacebook />
                    </StyledIconButton>
                    <StyledIconButton>
                        <FaTwitter />
                    </StyledIconButton>
                    <StyledIconButton>
                        <FaInstagram />
                    </StyledIconButton>

                </Toolbar>
            </WhiteAppBar>
        </Box>
    );
}

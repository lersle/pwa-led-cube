import React from "react";
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({ theme }) => ({
    margin: 5
  }));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Software(props) {
    return (
        <>
            <Box sx={{ flexGrow: 1, maxWidth: 1200, m: 2 }}>
                <StyledTypography sx={{ mt: 2, mb: 2 }} variant="h4" component="div">
                        Software
                </StyledTypography>
            </Box>
        </>
    );
}

export default Software;
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { ColorPicker } from 'material-ui-color';

const StyledTypography = styled(Typography)(({ theme }) => ({
    margin: 20
  }));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



function Manipulate(props) {
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1200 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <StyledTypography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                        Manipulate
                    </StyledTypography>
                    <Typography> 

                    </Typography>
                    <Typography variant="body">Select the color in which the cube shall shine</Typography>
                    <ColorPicker defaultValue='#c00'/>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item>
                                <ListItemText align="left"
                                    primary="CLOCK"
                                    secondary="point the side 4 of the cube to this cell">
                                </ListItemText>
                                <Box sx={{ flexGrow: 1, height: 400, bgcolor: '#fff'}}></Box>
                            </Item>                            
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <ListItemText align="left"
                                    primary="DATA"
                                    secondary="point the side 6 of the cube to this cell">
                                </ListItemText>
                                <Box sx={{ flexGrow: 1, height: 400, bgcolor: '#000'}}></Box>
                            </Item>                            
                        </Grid>
                    </Grid>
                </Grid>  
            </Grid>
        </Box>
    );
}

export default Manipulate;
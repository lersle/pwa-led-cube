import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { ColorPicker } from 'material-ui-color';

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



function Manipulate(props) {
    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1200, m: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <StyledTypography sx={{ mt: 2, mb: 2 }} variant="h4" component="div">
                        Manipulate
                    </StyledTypography>
                    <StyledTypography> 
                        In this tab you will find different ways to customize your LED-Cube. <br/>
                        For example, you can change the color, adjust the brightness, or make the 
                        LED-Cube roll to your advantage. <br/>
                        To modify, all you need to do is fill in the details below as you wish. <br/>
                        Once you have customized all the settings as you like, you can send the data 
                        to your LED-Cube either via Bluethooth or optically.
                    </StyledTypography>
                    <StyledTypography sx={{ mt: 3, mb: 0.5 }} variant="h5" component="div">
                        Color
                    </StyledTypography>
                    <StyledTypography variant="body">
                        To select the color, in which the cube shall shine, just click the colored square.
                    </StyledTypography>
                    <ColorPicker defaultValue='#c00'/>
                    <StyledTypography sx={{ mt: 3, mb: 0.5 }} variant="h5" component="div">
                        Dice mode
                    </StyledTypography>
                    <StyledTypography variant="body">
                    Here you can set in which mode the cube should operate. This influences the highest <br/>possible value of the eyes. So d5 (five-sided), d4 (four-sided), d3 (three-sided), d2 (two-sided) can be simulated or the cube is operated in the normal 6-sided mode.
                    </StyledTypography>
                    <StyledTypography sx={{ mt: 3, mb: 0.5 }} variant="h5" component="div">
                        Optical interface
                    </StyledTypography>
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
import React from "react";
import { Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
 
function Home(props) {
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                <Grid item xs={6} sx={{mt: 1 }}>
                    <Link href="/manual" underline="none">
                        <Item>
                            <ListItemText align="center"
                                    primary="Manual"
                                    secondary="user manual for assembling and using the LED-Cube">
                            </ListItemText>
                        </Item>
                    </Link>
                </Grid>
                <Grid item xs={6} sx={{mt: 1 }}>
                    <Link href="/manipulate" underline="none">
                        <Item>
                            <ListItemText align="center"
                                primary="Manipulate"
                                secondary="set the color of the LED-Cube or cheat">
                            </ListItemText>
                        </Item>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="/development" underline="none">
                        <Item>
                            <ListItemText align="center"
                                primary="Development"
                                secondary="infos about the development process of the LED-Cube">
                            </ListItemText>
                        </Item>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="/hardware" underline="none">
                        <Item>
                            <ListItemText align="center"
                                primary="Hardware"
                                secondary="infos of the used hardware">
                            </ListItemText>
                        </Item>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="/software" underline="none">
                        <Item>
                            <ListItemText align="center"
                                primary="Software"
                                secondary="source-code for the LED-Cube">
                            </ListItemText>
                        </Item>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="https://www.bfh.ch/de/aktuell/" target="_blank" rel="noopener" underline="none">
                        <Item>
                            <ListItemText align="center"
                                    primary="News"
                                    secondary="news about the BFH">
                            </ListItemText>
                        </Item>
                    </Link>
                </Grid>
                
            </Grid>
        </>
    );
}

export default Home; 
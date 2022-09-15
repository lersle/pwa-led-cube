import React from "react";
import { Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

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
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Link href="/manual" underline="none">
                        <Item>
                            <Typography>Manual</Typography>
                        </Item>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="/manipulate" underline="none">
                        <Item>
                            <Typography>Manipulate</Typography>
                        </Item>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="/development" underline="none">
                        <Item>
                            <Typography>Development</Typography>
                        </Item>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="/hardware" underline="none">
                        <Item>
                            <Typography>Hardware</Typography>
                        </Item>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="/software" underline="none">
                        <Item>
                            <Typography>Software</Typography>
                        </Item>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Link href="https://www.bfh.ch/de/aktuell/" target="_blank" rel="noopener" underline="none">
                        <Item>
                            <Typography>News</Typography>
                        </Item>
                    </Link>
                </Grid>
                
            </Grid>
        </>
    );
}

export default Home; 
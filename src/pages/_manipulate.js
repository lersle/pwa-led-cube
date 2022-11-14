import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { ColorPicker } from 'material-ui-color';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



function Manipulate(props) {
    const defaultProps = {
        options: diceMode,
        getOptionLabel: (option) => option.title,
    };

    const [openCheat, setOpenCheat] = React.useState(false);

    const handleClickOpen = () => {
        setOpenCheat(true);
    };

    const handleClose = () => {
        setOpenCheat(false);
    };

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1200, m: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <StyledTypography sx={{ mt: 2, mb: 2 }} variant="h4" component="div">
                        Manipulate
                    </StyledTypography>
                    <StyledTypography>
                        In this tab you will find different ways to customize your LED-Cube. <br />
                        For example, you can change the color, adjust the brightness, or make the
                        LED-Cube roll to your advantage. <br />
                        To modify, all you need to do is fill in the details below as you wish. <br />
                        Once you have customized all the settings as you like, you can send the data
                        to your LED-Cube either via Bluethooth or optically.
                    </StyledTypography>
                    <StyledTypography sx={{ mt: 3, mb: 0.5 }} variant="h5" component="div">
                        Color
                    </StyledTypography>
                    <StyledTypography variant="body">
                        To select the color, in which the cube shall shine, just click the colored square.
                    </StyledTypography>
                    <ColorPicker defaultValue='#c00' />
                    <StyledTypography sx={{ mt: 3, mb: 0.5 }} variant="h5" component="div">
                        Dice mode
                    </StyledTypography>
                    <StyledTypography variant="body">
                        Here you can set in which mode the cube should operate. This influences the highest <br />possible value of the eyes. So d5 (five-sided), d4 (four-sided), d3 (three-sided), d2 (two-sided) can be simulated or the cube is operated in the normal 6-sided mode.
                    </StyledTypography>
                    <Autocomplete
                        {...defaultProps}
                        id="disable-close-on-select"
                        disableCloseOnSelect
                        renderInput={(params) => (
                            <TextField {...params} label="select dice mode" variant="standard" />
                        )}
                    />
                    <StyledTypography sx={{ mt: 3, mb: 0.5 }} variant="h5" component="div">
                        Cheating
                    </StyledTypography>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Start cheat wizard
                    </Button>
                    <Dialog
                        open={openCheat}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Do you really want to cheat?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Cheating generally describes various actions designed to subvert rules in order to obtain unfair advantages.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Nope, I'd rather lose honest</Button>
                            <Button onClick={handleClose}>Yes, totally!!</Button>
                        </DialogActions>
                    </Dialog>
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
                                <Box sx={{ flexGrow: 1, height: 400, bgcolor: '#fff' }}></Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <ListItemText align="left"
                                    primary="DATA"
                                    secondary="point the side 6 of the cube to this cell">
                                </ListItemText>
                                <Box sx={{ flexGrow: 1, height: 400, bgcolor: '#000' }}></Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Manipulate;

const diceMode = [
    { title: 'd2 - two sided dice' },
    { title: 'd3 - three sided dice' },
    { title: 'd4 - four sided dice' },
    { title: 'd5 - five sided dice' },
    { title: 'd6 - six sided dice' }
];
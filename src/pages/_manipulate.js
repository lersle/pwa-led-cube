import React from "react";
import Box from '@mui/material/Box';
import { useState, useEffect } from "react";
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SketchPicker, BlockPicker } from "react-color";

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
    const [openCheatMode, setOpenCheatMode] = React.useState(false);
    const [openCheatModeSimple, setOpenCheatModeSimple] = React.useState(false);
    const [openCheatModeAdvanced, setOpenCheatModeAdvanced] = React.useState(false);

    const handleClickOpenCheat = () => {
        setOpenCheat(true);
    };

    const handleCloseCheat = () => {
        setOpenCheat(false);
    };

    const handleClickOpenCheatMode = () => {
        setOpenCheatMode(true);
    };

    const handleCloseCheatMode = () => {
        setOpenCheatMode(false);
    };

    const handleClickOpenCheatModeSimple = () => {
        setOpenCheatModeSimple(true);
    };

    const handleCloseCheatModeSimple = () => {
        setOpenCheatModeSimple(false);
    };

    const handleClickOpenCheatModeAdvanced = () => {
        setOpenCheatModeAdvanced(true);
    };

    const handleCloseCheatModeAdvanced = () => {
        setOpenCheatModeAdvanced(false);
    };

    const [color, setColor] = useState("");
    const [valueDiceMode, setValueDiceMode] = useState("value");
    const [valueCheatAdvanced, setValueCheatAdvanced] = useState("");
    const [valueCheatSimpleNumber, setValueCheatSimpleNumber] = useState("");
    const [valueCheatSimpleTurn, setValueCheatSimpleTurn] = useState("");
    const [valueCheatSimpleRound, setValueCheatSimpleRound] = useState("");
    // const [value, setValue] = useState("");

    const handleChangeColor = e => {
        setColor(e.target.value);
        console.log(`Color => ${e.target.value}`)
    };
    const handleChangeAdvancedCheat = e => {
        setValueCheatAdvanced(e.target.value);
        console.log(`Advanced => ${e.target.value}`)
    };

    const handleChangeSimpleNumberCheat = e => {
        setValueCheatSimpleNumber(e.target.value);
        console.log(`number => ${e.target.value}`)
    };

    const handleChangeSimpleTurnCheat = e => {
        setValueCheatSimpleTurn(e.target.value);
        console.log(`turns => ${e.target.value}`)
    };

    const handleChangeSimpleRoundCheat = e => {
        setValueCheatSimpleRound(e.target.value);
        console.log(`rounds => ${e.target.value}`)
    };

    const [clockIsActive, setClockIsActive] = useState(false);
    const [dataIsActive, setDataIsActive] = useState(false);

    const handleColorClock = () => {
        setClockIsActive(current => !current);
    };

    const handleColorData = () => {
        setDataIsActive(current => !current);
    };

    const handleChangeDiceMode = e => {
        console.log(`changed Dicemode`)
    }

    const sendData = () => {
        console.log(`color => ${color} dicemode => ${diceMode} number => ${valueCheatSimpleNumber} turns => ${valueCheatSimpleTurn} rounds => ${valueCheatSimpleRound} advanced => ${valueCheatAdvanced}`)
    }

    const interval = setInterval(() => {
        handleColorClock();
    }, 1000);

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 1200, m: 2 }}>
            <div>
                <Button
                    style={{
                        backgroundColor: clockIsActive ? 'black' : 'white',
                        color: clockIsActive ? 'white' : 'black',
                    }}
                    onClick={handleColorClock}
                >
                    Hello world
                </Button>
                <Button
                    style={{
                        backgroundColor: dataIsActive ? 'black' : 'white',
                        color: dataIsActive ? 'white' : 'black',
                    }}
                    onClick={handleColorData}
                >
                    Hello world
                </Button>
            </div>
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
                    <div>
                        <input type="color" defaultValue='#c00' value={color} onChange={handleChangeColor} />
                    </div>
                    <StyledTypography sx={{ mt: 3, mb: 0.5 }} variant="h5" component="div">
                        Dice mode
                    </StyledTypography>
                    <StyledTypography variant="body">
                        Here you can set in which mode the cube should operate. This influences the highest <br />possible value of the eyes. So d5 (five-sided), d4 (four-sided), d3 (three-sided), d2 (two-sided) can be simulated or the cube is operated in the normal 6-sided mode.
                    </StyledTypography>
                    <Autocomplete
                        onChange={handleChangeDiceMode}
                        value={valueDiceMode}
                        {...defaultProps}
                        id="clear-on-escape"
                        clearOnEscape
                        renderInput={(params) => (
                            <TextField {...params} label="select dice mode" variant="standard" />
                        )}
                    />
                    <StyledTypography sx={{ mt: 3, mb: 0.5 }} variant="h5" component="div">
                        Cheating
                    </StyledTypography>
                    <Button style={{ textTransform: 'none' }} color="warning" variant="outlined" onClick={handleClickOpenCheat}>
                        Start cheat wizard
                    </Button>
                    <Dialog
                        maxWidth={"md"}
                        open={openCheat}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleCloseCheat}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Do you really want to cheat?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Cheating generally describes various actions designed to subvert rules in order to obtain unfair advantages.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button style={{ textTransform: 'none' }} color="success" variant="outlined" onClick={handleCloseCheat}>Nope, I'd rather lose honest</Button>
                            <Button style={{ textTransform: 'none' }} color="warning" variant="outlined" onClick={function (event) { handleClickOpenCheatMode(); handleCloseCheat() }}>Yes, totally!!</Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        maxWidth={"md"}
                        open={openCheatMode}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleCloseCheatMode}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Which Cheat-Mode do you want to use?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                You can choose between the simple and the advanced mode.
                                In the simple mode you can determine how often (every x rolls) a certain number should be displayed.
                                In advanced mode you can enter a specific number order.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button style={{ textTransform: 'none' }} color="success" variant="outlined" onClick={handleCloseCheatMode}>I have changed my mind</Button>
                            <Button style={{ textTransform: 'none' }} color="warning" variant="outlined" onClick={function (event) { handleClickOpenCheatModeSimple(); handleCloseCheatMode() }}>I want to keep it simple</Button>
                            <Button style={{ textTransform: 'none' }} color="warning" variant="outlined" onClick={function (event) { handleClickOpenCheatModeAdvanced(); handleCloseCheatMode() }}>I want to get all the options</Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        maxWidth={"md"}
                        open={openCheatModeSimple}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleCloseCheatModeSimple}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Simple Mode"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Here you can specify how often the chosen number will be displayed.
                                Minimal frequency is every 16th turns.
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                                        <InputLabel id="simple-number-select">Show this number</InputLabel>
                                        <Select
                                            labelId="simple-number-select-label"
                                            id="simple-number-select"
                                            value={valueCheatSimpleNumber}
                                            label="Simple Number"
                                            onChange={handleChangeSimpleNumberCheat}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>Show number one</MenuItem>
                                            <MenuItem value={2}>Show number two</MenuItem>
                                            <MenuItem value={3}>Show number three</MenuItem>
                                            <MenuItem value={4}>Show number four</MenuItem>
                                            <MenuItem value={5}>Show number five</MenuItem>
                                            <MenuItem value={6}>Show number six</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                                        <InputLabel id="simple-frequency-select">every x turns</InputLabel>
                                        <Select
                                            labelId="simple-frequency-select-label"
                                            id="simple-frequency-select"
                                            value={valueCheatSimpleTurn}
                                            label="Simple Frequency"
                                            onChange={handleChangeSimpleTurnCheat}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>every turn</MenuItem>
                                            <MenuItem value={2}>every second turn</MenuItem>
                                            <MenuItem value={3}>every third turn</MenuItem>
                                            <MenuItem value={4}>every fourth turn</MenuItem>
                                            <MenuItem value={5}>every fifth turn</MenuItem>
                                            <MenuItem value={6}>every sixth turn</MenuItem>
                                            <MenuItem value={7}>every seventh turn</MenuItem>
                                            <MenuItem value={8}>every eighth turn</MenuItem>
                                            <MenuItem value={9}>every ninth turn</MenuItem>
                                            <MenuItem value={10}>every tenth turn</MenuItem>
                                            <MenuItem value={11}>every eleventh turn</MenuItem>
                                            <MenuItem value={12}>every twelfth turn</MenuItem>
                                            <MenuItem value={13}>every 13th turn</MenuItem>
                                            <MenuItem value={14}>every 14th turn</MenuItem>
                                            <MenuItem value={15}>every 15th turn</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                                        <InputLabel id="simple-frequency-select">for y rounds</InputLabel>
                                        <Select
                                            labelId="simple-frequency-select-label"
                                            id="simple-frequency-select"
                                            value={valueCheatSimpleRound}
                                            label="Simple Occurrence"
                                            onChange={handleChangeSimpleRoundCheat}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={1}>for one round</MenuItem>
                                            <MenuItem value={2}>for two  rounds</MenuItem>
                                            <MenuItem value={3}>for three rounds</MenuItem>
                                            <MenuItem value={4}>for four rounds</MenuItem>
                                            <MenuItem value={5}>for five rounds</MenuItem>
                                            <MenuItem value={6}>for six rounds</MenuItem>
                                            <MenuItem value={7}>for seven rounds</MenuItem>
                                            <MenuItem value={8}>for eight rounds</MenuItem>
                                            <MenuItem value={9}>for nine rounds</MenuItem>
                                            <MenuItem value={10}>for ten rounds</MenuItem>
                                            <MenuItem value={11}>for eleven rounds</MenuItem>
                                            <MenuItem value={12}>for twelve rounds</MenuItem>
                                            <MenuItem value={13}>for 13 rounds</MenuItem>
                                            <MenuItem value={14}>for 14 rounds</MenuItem>
                                            <MenuItem value={15}>for 15 rounds</MenuItem>
                                            <MenuItem value={16}>for 16 rounds</MenuItem>
                                            <MenuItem value={17}>for 17 rounds</MenuItem>
                                            <MenuItem value={18}>for 18 rounds</MenuItem>
                                            <MenuItem value={19}>for 19 rounds</MenuItem>
                                            <MenuItem value={20}>for 20 rounds</MenuItem>
                                            <MenuItem value={21}>for 21 rounds</MenuItem>
                                            <MenuItem value={22}>for 22 rounds</MenuItem>
                                            <MenuItem value={23}>for 23 rounds</MenuItem>
                                            <MenuItem value={24}>for 24 rounds</MenuItem>
                                            <MenuItem value={25}>for 25 rounds</MenuItem>
                                            <MenuItem value={26}>for 26 rounds</MenuItem>
                                            <MenuItem value={27}>for 27 rounds</MenuItem>
                                            <MenuItem value={28}>for 28 rounds</MenuItem>
                                            <MenuItem value={29}>for 29 rounds</MenuItem>
                                            <MenuItem value={30}>for 30 rounds</MenuItem>
                                            <MenuItem value={31}>for 31 rounds</MenuItem>
                                            <MenuItem value={32}>for 32 rounds</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button style={{ textTransform: 'none' }} color="warning" variant="outlined" onClick={function (event) { handleClickOpenCheatMode(); handleCloseCheatModeSimple() }}>Go back</Button>
                            <Button style={{ textTransform: 'none' }} color="success" variant="outlined" onClick={handleCloseCheatModeSimple}>I have changed my mind</Button>
                            <Button style={{ textTransform: 'none' }} color="warning" variant="outlined" onClick={handleCloseCheatModeSimple}>Save my choices</Button>

                        </DialogActions>
                    </Dialog>
                    <Dialog
                        maxWidth={"md"}
                        open={openCheatModeAdvanced}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleCloseCheatModeAdvanced}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Advanced Mode"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Here you can enter which numbers should be output. The individual numbers are to be separated with commas.
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField value={valueCheatAdvanced}
                                        onChange={handleChangeAdvancedCheat} id="advanced-number-array" label="Type your numbers here" variant="outlined" />
                                </Box>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button style={{ textTransform: 'none' }} color="warning" variant="outlined" onClick={function (event) { handleClickOpenCheatMode(); handleCloseCheatModeAdvanced() }}>Go back</Button>
                            <Button style={{ textTransform: 'none' }} color="success" variant="outlined" onClick={handleCloseCheatModeAdvanced}>I have changed my mind</Button>
                            <Button style={{ textTransform: 'none' }} color="warning" variant="outlined" onClick={handleCloseCheatModeAdvanced}>Save my choices</Button>
                        </DialogActions>
                    </Dialog>
                    <StyledTypography sx={{ mt: 3, mb: 0.5 }} variant="h5" component="div">
                        Optical interface
                    </StyledTypography>
                    <StyledTypography variant="body">
                        As soon as you press the button at the bottom, the transmission of the configured data begins. To ensure complete data transmission, hold your LED-Cube in front of the screen as described in the two fields. For more detailed instructions, please refer to the manual tab. If the transmission was successful, the LED-Cube lights up green twice, if something went wrong, it flashes red.
                    </StyledTypography>
                    <div>
                        <Button style={{ textTransform: 'none' }} color="warning" variant="outlined" onClick={sendData}>Start transmission</Button>
                    </div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Item>
                                <ListItemText align="left"
                                    primary="CLOCK"
                                    secondary="point the side 4 of the cube to this cell">
                                </ListItemText>
                                <Box sx={{ flexGrow: 1, height: 400, bgcolor: clockIsActive ? 'black' : 'white', color: clockIsActive ? 'white' : 'black', }}></Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>
                                <ListItemText align="left"
                                    primary="DATA"
                                    secondary="point the side 6 of the cube to this cell">
                                </ListItemText>
                                <Box sx={{ flexGrow: 1, height: 400, bgcolor: dataIsActive ? 'black' : 'white', color: dataIsActive ? 'white' : 'black', }}></Box>
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
    { title: 'd2 - two sided dice', value: '2' },
    { title: 'd3 - three sided dice', value: '3' },
    { title: 'd4 - four sided dice', value: '4' },
    { title: 'd5 - five sided dice', value: '5' },
    { title: 'd6 - six sided dice', value: '6' }
];
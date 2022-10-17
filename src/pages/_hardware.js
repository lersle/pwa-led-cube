import * as React from 'react';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Pdf from '../files/led-cube_schematic.pdf';
import SchematicPreview from '../images/schematic_preview.PNG'
import BOMPreview from '../images/bom_preview.PNG'
import PCBPreview from '../images/pcb_preview.PNG'
import FabricationPreview from '../images/fabrication_preview.PNG'
import BFHLogoColored from '../images/logo_bfh_colored.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  margin: 20
}));

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Hardware() {

  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 1200 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <StyledTypography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
            Hardware
          </StyledTypography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <Grid item xs={5} sx={{m: 1}}>
              <Link href={Pdf} target="_blank" underline="none" download>
                <Item>
                  <img  src={SchematicPreview} alt="Schematic-Preview" />
                  <ListItemText align="left"
                    primary="Schematic"
                    secondary="PDF of Schematic documents for the LED-Cube">
                  </ListItemText>
                </Item>
              </Link>
            </Grid>
            <Grid item xs={5} sx={{m: 1}}>
              <Link href={"https://github.com/lersle/led-cube"} underline="none" target="_blank" rel="noopener">
                <Item>
                  <img  src={BOMPreview} alt="BOM-Preview" />
                  <ListItemText align="left"
                    primary="Bill of Materials"
                    secondary="List of all used components and ordering guide">
                  </ListItemText>
                </Item>
              </Link>
            </Grid>
            <Grid item xs={5} sx={{m: 1}}>
              <Link href={"https://github.com/lersle/led-cube"} underline="none" target="_blank" rel="noopener">
                <Item>
                  <img  src={PCBPreview} alt="PCB-Preview" />
                  <ListItemText align="left"
                    primary="PCB-Files"
                    secondary="Files for the production of the printed circuit board">
                  </ListItemText>
                </Item>
              </Link>
            </Grid>
            <Grid item xs={5} sx={{m: 1}}>
              <Link href={"https://github.com/lersle/led-cube"} underline="none" target="_blank" rel="noopener">
                <Item>
                  <img  src={FabricationPreview} alt="PCB-Preview" />
                  <ListItemText align="left"
                    primary="Fabrication Manual"
                    secondary="Instructions for mounting and assembling the cube">
                  </ListItemText>
                </Item>
              </Link>
            </Grid>
          </Grid>
          <StyledTypography sx={{ mt: 4, mb: 2 }} variant="body" component="div">
            Used Components:
          </StyledTypography>
          <Demo>
            <List>
              <ListItem>
                <ListItemIcon>
                  <img src={BFHLogoColored} height={35} width={35} alt="BFH-Logo" />
                </ListItemIcon>
                <ListItemText
                  primary="ESP32-S3-MINI-1-N8"
                  secondary="The Brain of the LED-Cube is a ESP32-S3-MINI-1-N8, which is small­sized module supporting 2.4 GHz Wi­Fi (802.11 b/g/n) and Bluetooth® 5 (LE)
                  Built around ESP32­S3 series of SoCs, Xtensa® dual­core 32­bit LX7 microprocessor
                  Flash up to 8 MB, in chip package
                  39 GPIOs, rich set of peripherals
                  On­board PCB antenna"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <img src={BFHLogoColored} height={35} width={35} alt="BFH-Logo" />
                </ListItemIcon>
                <ListItemText
                  primary="MC3630"
                  secondary="The MC3630 is an ultra-low power, low-noise, integrated digital output 3-axis
                  accelerometer with a feature set optimized for wearables and consumer product
                  motion sensing. Applications include wearable consumer products, IoT devices,
                  user interface control, gaming motion input, electronic compass tilt compensation for
                  cell phones, game controllers, remote controls and portable media products"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <img src={BFHLogoColored} height={35} width={35} alt="BFH-Logo" />
                </ListItemIcon>
                <ListItemText
                  primary="Ws2812-2020"
                  secondary="WS2812B-2020 are digitally controlled light emitting diodes which are used as dice eyes on the LED-Cube. Their package 
                  meets to the latest MOLDING package technology, and the control circuit and RGB
                  color channels are integrated into the 2020 package. Internally, the LEDs feature an 
                  intelligent shift register for data conditioning and a driver circuit for the LEDs with
                  signal amplification circuitry. Also included are an internal precision oscillator and 
                  a voltage programmable constant current supply that converts the non-linear brightness 
                  curve of the color channels to one that is linear to the user."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <img src={BFHLogoColored} height={35} width={35} alt="BFH-Logo" />
                </ListItemIcon>
                <ListItemText
                  primary="MIC94091YC6-TR"
                  secondary="The MIC94091YC6-TR is a high side load switch which is used to turn off the LEDs 
                  control circuits to maximize the lifespan of the LED-Cube. It supports input voltages between 1.7V and 5.5V.
                  The load switch pass element is an internal P-channel MOSFET which enables the MIC94091YC6-TR to support up to 1.2A continuous current."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <img src={BFHLogoColored} height={35} width={35} alt="BFH-Logo" />
                </ListItemIcon>
                <ListItemText
                  primary="MCP9701AT-E/LT"
                  secondary="The MCP9701AT-E/LT temperature sensors with Linear Active Thermistor Integrated Circuit (IC)
                  is a analog temperature sensor that convert temperature to analog voltage which is used as a overheating protection.
                  The low-cost, low-power sensors feature an accuracy of ±2°C from 0°C to +70°C while consuming 6 µA (typical) of operating current.
                  Unlike resistive sensors, e.g., thermistors, the Linear Active Thermistor IC does not require an additional
                  signal-conditioning circuit. Therefore, the biasing circuit development overhead for thermistor solutions can be
                  avoided by implementing a sensor from these low-cost devices. The Voltage Output pin (VOUT) can be directly
                  connected to the ADC input of a microcontroller."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <img src={BFHLogoColored} height={35} width={35} alt="BFH-Logo" />
                </ListItemIcon>
                <ListItemText
                  primary="BQ25180/BQ25181"
                  secondary="The BQ25180 is a USB compatible 1-A Li-ion I²C programmable charger with regulated power path,
                  which features BAT temp thermistor monitoring (JEITA profile), IC thermal regulation, IINDPM (Input current limit), Input OVP,
                  Power Path, VINDPM (Input voltage threshold to maximize adaptor power). The charger is optimized for devices which
                  are turned of over long times. Through an integrated ship mode, in which the LED-Cubes current-consumption
                  can be reduced to 10nA, you can also play monopoly on your game nights without having to load the LED-Cube."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <img src={BFHLogoColored} height={35} width={35} alt="BFH-Logo" />
                </ListItemIcon>
                <ListItemText
                  primary="IN-S32GTLS"
                  secondary="In order to adjust the brightness of the LED cube to the environmental illumination 3 ambient light sensors are used.
                  Through the external circuit, the adjustment time and the maximum ambient lighting can be set."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <img src={BFHLogoColored} height={35} width={35} alt="BFH-Logo" />
                </ListItemIcon>
                <ListItemText
                  primary="Multiple LEDs"
                  secondary="With the ws2812 LEDs on the LED cube, there would be an almost infinite number of ways to display the condition of the system. 
                  However, they require so much current that an almost empty accumulator or an imminent overheating would only be accelerated. To still get
                  information about the accumulator status or the internal temperature, various low current LEDs are built-in."
                />
              </ListItem>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}

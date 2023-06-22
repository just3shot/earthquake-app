import { Box, Container, Grid, List, Paper, Typography } from '@mui/material'
import React from 'react'

import FALI from '../../components/firstAid_listItem'
import CustomAppBar from '../../components/CustomAppBar'
import BottomNav from '../../components/BottomNav'

import BleedingImg from '../../assets/Bleeding.png';
import ShockImg from '../../assets/Shock.png';
import FractureImg from '../../assets/Fracture.png';
import SprainImg from '../../assets/Sprain.png';
import BurnImg from '../../assets/Burn.png';
import Choking2Img from '../../assets/Choking2.png';
import EyeInjuryImg from '../../assets/Eye_Injury.png';
import CPR1Image from '../../assets/CPR_1.png';
import CPR2Image from '../../assets/CPR_2.png';

export default function firstAid() {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', pt: '32px', pb: '32px', alignItems: 'center', backgroundColor: '#F2F3F5' }}>
      <CustomAppBar headerName={"First Aid"} haveBackButton={true} />
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Paper sx={{ borderRadius: 5, p: 2 }}>
            <Typography variant='h5' gutterBottom sx={{ textAlign: 'left' }}>
              <strong>Shock</strong>
            </Typography>
            <Box>
              <img src={ShockImg} style={{ objectFit: 'cover', width: '80%', maxWidth: '500px' }} />
            </Box>
            <List dense>
              <FALI
                primaryText="Lay the person down on his or her back"
              />
              <FALI
                primaryText="If it does not cause pain or injury, elevate the feet 12 inches (30 cm). Check for signs of breathing, coughing or movement. If absent, call emergency number and begin CPR."
              />
              <FALI
                primaryText="Keep the person warm and comfortable. If choking, vomiting or bleeding from the mouth occur, turn the person on their side"
              />
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ borderRadius: 5, p: 2 }}>
            <Typography variant='h5' gutterBottom sx={{ textAlign: 'left' }}>
              <strong>Bleeding</strong>
            </Typography>
            <Box>
              <img src={BleedingImg} style={{ objectFit: 'cover', width: '80%', maxWidth: '500px' }} />
            </Box>
            <List dense>
              <FALI
                primaryText="Apply direct pressure to the wound using a sterile gauze pad or clean cloth."
              />
              <FALI
                primaryText="Elevate the injured area above the level of the heart if there is no fracture"
              />
              <FALI
                primaryText="Cover the area with a pressure bandage. If bleeding does not stop, apply additional dressings."
              />
              <FALI
                primaryText="If necessary, apply pressure to the artery with your hand."
              />
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ borderRadius: 5, p: 2 }}>
            <Typography variant='h5' gutterBottom sx={{ textAlign: 'left' }}>
              <strong>Fractures</strong>
            </Typography>
            <Box>
              <img src={FractureImg} style={{ objectFit: 'cover', width: '80%', maxWidth: '500px' }} />
            </Box>
            <List dense>
              <FALI
                primaryText="Help support the injured area. Stop any bleeding by applying pressure with a sterile bandage or clean cloth."
              />
              <FALI
                primaryText="Check for feeling, warmth and colour below fracture."
              />
              <FALI
                primaryText="Immobilze the injured area. Apply a soft or hard splint above and below the fracture."
              />
              <FALI
                primaryText="Apply ice or cold packs and elevate."
              />
              <FALI
                primaryText="Treat for shock. Lay the person down and elevate legs."
              />
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ borderRadius: 5, p: 2 }}>
            <Typography variant='h5' gutterBottom sx={{ textAlign: 'left' }}>
              <strong>Sprains</strong>
            </Typography>
            <Box>
              <img src={SprainImg} style={{ objectFit: 'cover', width: '80%', maxWidth: '500px' }} />
            </Box>
            <List dense>
              <FALI
                primaryText="Rest the ankle or injured area."
              />
              <FALI
                primaryText="Apply ice or cold packs wrapped in cloth to protect the skin."
              />
              <FALI
                primaryText="Compress by lightly wrapping an elastic bandage around the injured area."
              />
              <FALI
                primaryText="Elevate the injured area above the level of the heart to reduce swelling."
              />
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ borderRadius: 5, p: 2 }}>
            <Typography variant='h5' gutterBottom sx={{ textAlign: 'left' }}>
              <strong>Choking</strong>
            </Typography>
            <Box>
              <img src={Choking2Img} style={{ objectFit: 'cover', width: '80%', maxWidth: '500px' }} />
            </Box>
            <List dense>
              <FALI
                primaryText="Stand behind the person. Wrap your arms around the waist."
              />
              <FALI
                primaryText="Make a fist with one hand. Position it slightly above the person's navel."
              />
              <FALI
                primaryText="Grab the fist with the other hand. Press hard into the abdomen with quick inward and upward thrust."
              />
              <FALI
                primaryText="Perform 5 abdominal thrusts (Heimlich maneuver)."
              />
              <FALI
                primaryText="If the person becomes unconscious, perform CPR."
              />
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ borderRadius: 5, p: 2 }}>
            <Typography variant='h5' gutterBottom sx={{ textAlign: 'left' }}>
              <strong>Eye Injury</strong>
            </Typography>
            <Box>
              <img src={EyeInjuryImg} style={{ objectFit: 'cover', width: '80%', maxWidth: '500px' }} />
            </Box>
            <List dense>
              <FALI
                primaryText="Don't rub the eye."
              />
              <FALI
                primaryText="For a foreign particle such as dirt, sand, or sliver of wood of metal, have the person pull the upper lid down, blink repeatedly and flush the eye with water."
              />
              <FALI
                primaryText="For any chemicals in the eye, immediately flush the eyes with lots of water."
              />
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ borderRadius: 5, p: 2 }}>
            <Typography variant='h5' gutterBottom sx={{ textAlign: 'left' }}>
              <strong>CPR</strong>
            </Typography>
            <Box>
              <img src={CPR1Image} style={{ objectFit: 'cover', width: '80%', maxWidth: '500px' }} />
            </Box>

            <Typography>Begin Compression</Typography>

            <List dense>
              <FALI
                primaryText="If face down, put the person on his or her back while supporting the head, neck and back."
              />
              <FALI
                primaryText="Place the heel of one hand over the person's breastbone. Place the other hand on top of the first hand. Keep your elbows straight."
              />
              <FALI
                primaryText="Using your upper body push straight down compressing the chest to about 2 inches (5 cm). Push hard at a rate of 100 compression per minute."
              />
            </List>

            <Box>
              <img src={CPR2Image} style={{ objectFit: 'cover', width: '80%', maxWidth: '500px' }} />
            </Box>

            <Typography>Clear the airway</Typography>

            <List dense>
              <FALI
                primaryText="If trained for CPR, after 30 compressions, open the person's airway by placing your palm on the person's forehead and gently tilt the head back. With the other hand, gently lift the chin forward to open the airway."
              />
              <FALI
                primaryText="Check for normal breathing, chest motion and listen for normal breath sounds."
              />
            </List>

            <Box>
              <img src={CPR2Image} style={{ objectFit: 'cover', width: '80%', maxWidth: '500px' }} />
            </Box>

            <Typography>Breathe for the person</Typography>

            <List dense>
              <FALI
                primaryText="Pinch the nostrils and cover the person's mouth with yours."
              />
              <FALI
                primaryText="Give the first rescue breath and watch to see if the chest rises. If it does rise give the second breath. If the chest does not rise, repeat the head tilt, chin tilt and give the second breath."
              />
              <FALI
                primaryText="Resume chest compressions."
              />
              <FALI
                primaryText="Continue CPR until there are signs of movement or emergency personnel take over."
              />
            </List>
          </Paper>
        </Grid>

      </Grid>
      <BottomNav page='dashboard' />
    </Container >
  )
}

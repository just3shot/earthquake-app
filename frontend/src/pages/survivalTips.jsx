import React from 'react'
import { AppBar, Box, Button, Card, CardContent, Container, Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BottomNav from '../components/BottomNav'
import STLI from '../components/survivalTips_listItem';
import CustomAppBar from '../components/CustomAppBar';

export default function survivalTips() {

  const navigate = useNavigate();

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', pt: '32px', pb: '32px', alignItems: 'center', backgroundColor: '#F2F3F5' }}>
      <CustomAppBar headerName={"Survival Tips"} haveBackButton={true} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <Typography sx={{ pt: 2, pb: 1 }} variant="h6" component="div">
              <strong>Before the Earthquake</strong>
            </Typography>
            <Divider />
            <List dense>
              <STLI
                primaryText="Be prepared to react"
                secondaryText="Know how to react so your response to a quake is automatic. If an earthquake struck right now, how would you protect yourself."
              />
              <STLI
                primaryText="Know your location"
                secondaryText="Identify safe spaces in the room: under a desk, along interior walls, away from windows, bookcase, and picture frames. Plan your response: know how to exit the building after an earthquake (not during) - even if the lights are off."
              />
            </List>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <Typography sx={{ pt: 2, pb: 1 }} variant="h6" component="div">
              <strong>After the Earthquake</strong>
            </Typography>
            <Divider />
            <List dense>
              <STLI
                primaryText="Remain calm as the earthquake occurs - other will respond to your actions"
                secondaryText="Staying calm in groups of people is crucial and can prevent panic."
              />
              <STLI
                primaryText="If you are indoors during an earthquake, stay there"
                secondaryText={
                  <Box sx={{ textAlign: 'left' }}>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '15px' }}>
                      <li>Move away from windows, bookcases and large objects.</li>
                      <li>Go to a safe location- under a desk, a table, or go along an interior wall.</li>
                      <li>If you have no protection: drop to the floor, and cover your head and face</li>
                      <li>Stay under cover until after the shaking stops, and you are sure that debris is no longer falling</li>
                      <li>Do not stand in a doorway, as some previous safety guidelines recommended. A swinging door can cause injuries.</li>
                      <li>In a crowded place, do not rush to the exit. More injuries are caused by panic than by earthquakes themselves.</li>
                    </ul>
                  </Box>
                }
              //"Move away from windows, bookcases and large objects. Go to a safe location- under a desk, a table, or go along an interior wall. "
              />
            </List>
          </Card>
        </Grid>
      </Grid>

      <BottomNav page='dashboard' />
    </Container>
  )
}

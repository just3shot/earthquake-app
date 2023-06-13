import React from 'react'
import { AppBar, Box, Button, Card, CardContent, Container, Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function survivalTips_listItem({ primaryText, secondaryText }) {
  return (
      <ListItem>
          <ListItemIcon>
              <CheckCircleIcon sx={{ color: '#990000' }} />
          </ListItemIcon>
          <ListItemText
              primary={<strong>{primaryText}</strong>}
              secondary={secondaryText}
          />
      </ListItem>
  )
}

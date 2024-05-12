// OutputArea.js
import React from 'react';
import { Paper, Typography, List, ListItem } from '@mui/material';

function OutputArea({ summary, text }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px 40px' }}>
      <Typography 
        variant='h4'
        style={{
            fontWeight: 800,
            color: "#1976d2",
            marginBottom: "10px"
        }}>
            Your Text
        </Typography>
        <Typography variant="body1"
            style={{fontSize: "1.6rem",
                marginBottom: "4px",
                padding: "2px 0px 10px 25px",
            }}>
        {text}
        </Typography>
        <Typography 
        variant='h4'
        style={{
            fontWeight: 800,
            color: "#1976d2",
            marginBottom: "10px"
        }}>
          Summarized Text
      </Typography>
        <List sx={{ listStyleType: 'disc'}}>
          {summary.map((item, index) => (
            <ListItem key={index} >
              <ListItem component="span" sx={{ display: 'list-item',}}>{item}</ListItem>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}

export default OutputArea;

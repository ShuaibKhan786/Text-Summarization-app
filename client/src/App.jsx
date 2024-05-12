// App.js
import React, { useState } from 'react';
import InputArea from './components/Input';
import OutputArea from './components/Output';
import { Typography ,Paper } from '@mui/material';

function App() {
  const [summary, setSummary] = useState([]);
  const [show, SetShow] = useState(false);
  const [showErr, SetShowErr] = useState(false);
  const [cacheText, setCacheText] = useState("");

  const handleSummarySubmit = async (text) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });
      const data = await response.json();
      if (data.summary.length == 0){
        SetShow(false)
        SetShowErr(true)
      }else {
        SetShow(true)
        SetShowErr(false)
        setCacheText(text)
        setSummary(data.summary);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}> 
      <Typography 
        variant='h3'
        style={{
          fontWeight: 800,
          color: "#1976d2",
          marginBottom: "10px"
        }}>
          Welcome to Text Summarization
      </Typography>
      <InputArea onSummarySubmit={handleSummarySubmit} SetShowErr={SetShowErr} SetShow={SetShow}/>
      {show && <OutputArea summary={summary} text={cacheText}/>}
      {showErr && 
        <Paper elevation={2} style={{ 
            padding: '20px 40px',
            marginTop: "6px" }}>
          <Typography variant='h5'>
            Sorry, we couldn't generate a summary for the provided text
          </Typography>
        </Paper>}
   </div>
  );
}

export default App;

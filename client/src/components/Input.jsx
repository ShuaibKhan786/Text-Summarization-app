// InputArea.js
import React, { useState , useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import SummarizeIcon from '@mui/icons-material/Summarize';

function InputArea({ onSummarySubmit , SetShowErr ,SetShow}) {
  const [text, setText] = useState('');
  const [warning, setWarning] = useState('');

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    
    // Clear warning message if text length exceeds 50 words
    if (newText.length >= 50 && warning) {
      setWarning('');
    }
  };

  const handleSubmit = () => {
    if (text.length < 50) {
      setWarning("Please make sure you at least give 50 words");
    } else {
      onSummarySubmit(text);
      setText('');
    }
  };

  useEffect(()=>{
    if(text.length > 0) {
        SetShowErr(false)
        SetShow(false)
    }
  },[text])

  return (
    <div>
      <TextField
        type='text'
        multiline
        rows={6}
        fullWidth
        variant="outlined"
        label="please enter your text you want to summarize"
        value={text}
        onChange={handleTextChange}
        error={warning !== ''}
        helperText={warning}
        style={{marginBottom: "10px"}}
      />
      <Button variant="contained" 
        color="primary" 
        size='small'
        style={{fontWeight: 800}}
        onClick={handleSubmit}
        startIcon={<SummarizeIcon />}>
            Summarized
      </Button>
    </div>
  );
}

export default InputArea;

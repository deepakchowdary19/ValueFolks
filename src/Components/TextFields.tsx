import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface BasicTextFieldsProps {
  width: string;
  label: string;
  
}

export default function BasicTextFields(props: BasicTextFieldsProps) {
  const { width, label } = props;

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: width }, 
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" />  
    </Box>
  );
}

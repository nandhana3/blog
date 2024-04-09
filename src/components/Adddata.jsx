import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Adddata = () => {
  return (
    <div style={{paddingTop:"80px"}}>
      <center>
        <Typography variant='h4'>Add Blog Details</Typography>
        <TextField label='Blog name' variant='outlined'></TextField><br /><br />
        <TextField label='Description' variant='outlined'></TextField><br /><br />
        <TextField label='Author name' variant='outlined'></TextField><br /><br />
        <Button  variant='contained' color='success'>SUBMIT</Button>
        </center>
    </div>
  )
}

export default Adddata
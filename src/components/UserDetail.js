import React from 'react'
import ThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

let UserDetail = ({values, handleInput, nextStep}) => {
    return (
      <ThemeProvider>
        <AppBar title='Enter User Details' />
          <TextField 
            floatingLabelText="Enter First Name"
            onChange={handleInput}
            defaultValue={values.firstName}
            name='firstName'
          />
          <br/>
          <TextField 
            floatingLabelText="Enter Last Name"
            onChange={handleInput}
            defaultValue={values.lastName}
            name='lastName'
          />
          <br/>
          <TextField 
            floatingLabelText="Enter Email"
            onChange={handleInput}
            defaultValue={values.email}
            name='email'
          />
          <br/>
          <br/>
          <RaisedButton 
            label='Continue'
            primary={true}
            onClick={nextStep}
          />
      </ThemeProvider>
    );
}

export default UserDetail
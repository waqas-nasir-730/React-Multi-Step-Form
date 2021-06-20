import React from 'react'
import ThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

let PersonalDetail = ({values, handleInput, nextStep, prevStep}) => {
    return (
      <ThemeProvider>
        <AppBar title='Enter Personal Details' />
          <TextField 
            floatingLabelText="Enter Ocupation"
            onChange={handleInput}
            defaultValue={values.ocupation}
            name='ocupation'
          />
          <br/>
          <TextField 
            floatingLabelText="Enter City"
            onChange={handleInput}
            defaultValue={values.city}
            name='city'
          />
          <br/>
          <TextField 
            floatingLabelText="Enter Age"
            onChange={handleInput}
            defaultValue={values.age}
            name='age'
          />
          <br/>
          <br/>
          <RaisedButton 
            label='Continue'
            primary={true}
            onClick={nextStep}
          />
          <RaisedButton 
            label='Previous'
            primary={false}
            onClick={prevStep}
          />
      </ThemeProvider>
    );
}

export default PersonalDetail
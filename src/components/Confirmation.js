import React from 'react'
import ThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';

let Confirmation = ({values, nextStep, prevStep}) => {
  return (
    <ThemeProvider>
      <AppBar title='Confirmation'/>
      <List>
        <ListItem 
          primaryText='First Name'
          secondaryText={values.firstName}
        />
        <ListItem 
          primaryText='Last Name'
          secondaryText={values.lastName}
        />
        <ListItem 
          primaryText='Email'
          secondaryText={values.email}
        />
        <ListItem 
          primaryText='Ocupation'
          secondaryText={values.ocupation}
        />
        <ListItem 
          primaryText='City'
          secondaryText={values.city}
        />
        <ListItem 
          primaryText='Age'
          secondaryText={values.age}
        />
      </List>
        <br/>
        <br/>
        <RaisedButton 
          label='Confirm & Submit'
          primary={true}
          onClick={nextStep}
        />
        <RaisedButton 
          label='Previous'
          primary={false}
          onClick={prevStep}
          />
    </ThemeProvider>
  )
}

export default Confirmation;
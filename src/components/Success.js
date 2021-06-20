import React from 'react'
import ThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

let Success = () => {
  return (
    <ThemeProvider>
      <AppBar title='Success'/>
      <h1>Form has been submited. JK</h1>
    </ThemeProvider>
  )
}

export default Success;
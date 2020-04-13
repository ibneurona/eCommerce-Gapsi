import React from 'react';
import {Button, Grid} from '@material-ui/core';
import Avatar from '../components/Avatar';
import MensajeBienvenida from '../components/MensajeBeinvenida';
import Version from '../components/Version';
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <>
      <Avatar/>
      <br/>
      <MensajeBienvenida/>
      <br/>
      
      <Grid
        container 
        justify="center"
        alignItems="center"
      >
        <Link to="/tienda">
          <Button variant="contained" color="primary" >
            Continuar
          </Button>
        </Link>
      </Grid>
      <br/>
      <Version/>
    </>
    );
}
 
export default Login;
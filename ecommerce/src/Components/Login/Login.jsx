import styles from "./Login.module.css";

import * as React from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';

const Login = () => {
  return (
    <div className={styles.login}>
         <Stack direction="row" spacing={2}>
     
      <Button style={ {backgroundColor:"white", color:"#308E95" } }variant="contained" startIcon={<LoginIcon />}>
        Login
      </Button>
    </Stack>
    </div>
  )
}

export default Login;
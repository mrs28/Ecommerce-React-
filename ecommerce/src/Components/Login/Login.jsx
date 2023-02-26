import styles from "./Login.module.css";

import * as React from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';

const Login = () => {
  return (
    <div className={styles.login}>
         <Stack direction="row" spacing={2}>
     
      <Button className={styles.btnLogin} variant="contained" startIcon={<LoginIcon />}>
        Login
      </Button>
    </Stack>
    </div>
  )
}

export default Login;
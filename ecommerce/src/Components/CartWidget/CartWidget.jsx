// import styles from './CartWidget.module.css';

import * as React from 'react';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div>
       <Stack direction="row" spacing={2}>
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
      <Button style={ {backgroundColor:"white", color:"#308E95" }} variant="contained" endIcon={<ShoppingCartIcon />}>
        Send
      </Button>
    </Stack>
     </div>
  )
}

export default CartWidget;

import * as React from 'react';

import { Grid, Box } from '@mui/material';



const Main = () => {
    return (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: '#308E95',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          // <ItemListContainer tittle={"Bienvenido a Katz Petshop"}/>
      >
        <Grid container spacing={2}>
        <Grid item xs={12} border={2} borderColor={"red"}>
          <h2>hola</h2>
        </Grid>

        <Grid xs={6}>
        <h2>hola</h2>
        </Grid>
      </Grid>

      </Box>
      );

}

export default Main;

import styles from './Header.module.css';
// import { Grid, Box } from '@mui/material';

import NavbarLeft from './NavbarLeft/NavbarLeft';
import Navbar from './Nabvar/Nabvar';


// import Login from '../Login/Login';
// import CartWidget from "../CartWidget/CartWidget";
import NavbarRight from './NavbarRight/NavbarRight';


const Header = () => {
  return (

    // <Box>
    //   <Grid container spacing={2}>
    //     <Grid item xs={12} lg={4} border={2} borderColor={"red"}> 
    //     <NavbarLeft />
    //     </Grid>
    //     <Grid item xs={12} lg={4} border={2} borderColor={"yellow"}>
    //     <Navbar />
    //     </Grid>
    //     <Grid item xs={12} lg={4} border={2} borderColor={"pink"}>
    //     <NavbarRight />
    //     </Grid>
    //   </Grid>
    // </Box>
    <div className={styles.header}>
        <NavbarLeft />
        <Navbar />
        <NavbarRight />
    </div>
    
  )
}

export default Header;


import styles from "./LoginWidget.module.css";

import Button from "../Atoms/Button/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const LoginWidget = ({ title }) => {
  return (
    <Link to="/login">
      <Button>
        <LoginIcon className={styles.icon} fontSize="large" />
        {title}
      </Button>
    </Link>
  );
};

export default LoginWidget;

// {/* <div className={styles.login}>
// <Stack direction="row" spacing={2}>

// <Button style={ {backgroundColor:"white", color:"#308E95" } }variant="contained" startIcon={<LoginIcon />}>
// Login
// </Button>
// </Stack>
// </div> */}

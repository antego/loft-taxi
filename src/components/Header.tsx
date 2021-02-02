import React from "react"; // we need this to make JSX compile
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  appBar: {
    background: "black",
  },
  logo: {
    flexGrow: 1,
  },
});

const Header: React.FC<{
  onOrder: () => void;
  onSignOut: () => void;
  onProfile: () => void;
}> = (props) => {
  const classes = useStyles();
  return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div className={classes.logo}>
            LOFT<span style={{ color: "orange" }}>TAXI</span>
          </div>
          <Button color="inherit" onClick={props.onOrder}>
            Карта
          </Button>
          <Button color="inherit" onClick={props.onProfile}>
            Профиль
          </Button>
          <Button color="inherit" onClick={props.onSignOut}>
            Выйти
          </Button>
        </Toolbar>
      </AppBar>
  );
};

export default Header;

import { makeStyles } from "@material-ui/core/styles";
import React from "react"; // we need this to make JSX compile
import SignUpDialog from "../components/SignUpDialog";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    display: "flex",
  },
  leftColumn: {
    background: "#000",
    width: "30%",
    height: "100%",
  },
  rightColumn: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});

const SignUpPage: React.FC<{}> = (
  props
) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftColumn} />
      <div className={classes.rightColumn}>
        <SignUpDialog />
      </div>
    </div>
  );
};

export default SignUpPage;

import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react"; // we need this to make JSX compile
import Header from "../components/Header";
import ProfileConfirmationDialog from "../components/ProfileConfirmationDialog";
import ProfileDialog from "../components/ProfileDialog";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

enum Dialog {
  EDIT,
  CONFIRM,
}

const ProfilePage: React.FC<{}> = (props) => {
  const [dialog, setDialog] = useState<Dialog>(Dialog.EDIT);
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.wrapper}>
        {dialog === Dialog.EDIT ? (
          <ProfileDialog onSave={() => setDialog(Dialog.CONFIRM)} />
        ) : (
          <ProfileConfirmationDialog />
        )}
      </div>
    </>
  );
};

export default ProfilePage;

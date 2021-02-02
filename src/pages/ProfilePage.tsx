import React, { useState } from "react"; // we need this to make JSX compile
import Header from "../components/Header";
import ProfileConfirmationDialog from "../components/ProfileConfirmationDialog";
import ProfileDialog from "../components/ProfileDialog";

enum Dialog {
  EDIT,
  CONFIRM,
}

const ProfilePage: React.FC<{
  onMap: () => void;
  onProfile: () => void;
  onSignOut: () => void;
  onReturnToMap: () => void;
}> = (props) => {
  const [dialog, setDialog] = useState<Dialog>(Dialog.EDIT);

  return (
    <>
      <Header
        onOrder={props.onMap}
        onProfile={props.onProfile}
        onSignOut={props.onSignOut}
      />
      {dialog === Dialog.EDIT ? (
        <ProfileDialog onSave={() => setDialog(Dialog.CONFIRM)} />
      ) : (
        <ProfileConfirmationDialog onReturnToOrder={props.onReturnToMap} />
      )}
    </>
  );
};

export default ProfilePage;

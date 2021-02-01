import React, { useState } from "react"; // we need this to make JSX compile
import Header from "../components/Header";
import ProfileConfirmationDialog from "../components/ProfileConfirmationDialog";
import ProfileDialog from "../components/ProfileDialog";

enum Dialog {
  EDIT,
  CONFIRM,
}

const MapProfilePage: React.FC<{
  onOrder: () => void;
  onProfile: () => void;
  onSignOut: () => void;
  onReturnToOrder: () => void;
}> = (props) => {
  const [dialog, setDialog] = useState<Dialog>(Dialog.EDIT);

  return (
    <>
      <Header
        onOrder={props.onOrder}
        onProfile={props.onProfile}
        onSignOut={props.onSignOut}
      />
      {dialog === Dialog.EDIT ? (
        <ProfileDialog onSave={() => setDialog(Dialog.CONFIRM)} />
      ) : (
        <ProfileConfirmationDialog onReturnToOrder={props.onReturnToOrder} />
      )}
    </>
  );
};

export default MapProfilePage;

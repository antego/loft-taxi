import React from "react"; // we need this to make JSX compile

interface ProfileConfirmationDialogProps {
  onReturnToMap: () => void;
}

function ProfileConfirmationDialog(props: ProfileConfirmationDialogProps) {
  return (
    <div style={{ background: "orange" }}>
      <h2>Профиль</h2>
      <br />
      <button onClick={props.onReturnToMap}>Перейти на карту</button>
    </div>
  );
}

export default ProfileConfirmationDialog;

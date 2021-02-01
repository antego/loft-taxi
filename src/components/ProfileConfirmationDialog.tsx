import React from "react"; // we need this to make JSX compile

const ProfileConfirmationDialog: React.FC<{
  onReturnToOrder: () => void;
}> = (props) => {
  return (
    <div style={{ background: "orange" }}>
      <h2>Профиль</h2>
      Профиль изменен
      <br />
      <button onClick={props.onReturnToOrder}>Перейти на карту</button>
    </div>
  );
};

export default ProfileConfirmationDialog;

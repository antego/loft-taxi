import React, { useState } from "react"; // we need this to make JSX compile
import Header from "../components/Header";
import OrderConfirmationDialog from "../components/OrderConfirmationDialog";
import OrderDialog from "../components/OrderDialog";

enum Dialog {
  ORDER,
  CONFIRM,
}

const MapOrderPage: React.FC<{
  onProfile: () => void;
  onMap: () => void;
  onSignOut: () => void;
}> = (props) => {
  const [dialog, setDialog] = useState<Dialog>(Dialog.ORDER);

  return (
    <>
      <Header
        onOrder={props.onMap}
        onProfile={props.onProfile}
        onSignOut={props.onSignOut}
      />
      {dialog === Dialog.ORDER ? (
        <OrderDialog onOrder={() => setDialog(Dialog.CONFIRM)} />
      ) : (
        <OrderConfirmationDialog onNewOrder={() => setDialog(Dialog.ORDER)} />
      )}
    </>
  );
};

export default MapOrderPage;

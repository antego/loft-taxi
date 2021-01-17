import React from "react"; // we need this to make JSX compile

interface OrderDialogProps {
  onOrder: () => void;
}

function OrderDialog(props: OrderDialogProps) {
  return (
    <div style={{ background: "orange" }}>
      Лесная поляна
      <br />
      Березовая роща
      <br />
      <button onClick={props.onOrder}>Заказать</button>
    </div>
  );
}

export default OrderDialog;

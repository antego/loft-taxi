import React from "react"; // we need this to make JSX compile

interface OrderConfirmationDialogProps {
  onNewOrder: () => void;
}

function OrderConfirmationDialog(props: OrderConfirmationDialogProps) {
  return (
    <div style={{ background: "orange" }}>
      <button onClick={props.onNewOrder}>Сделать новый заказ</button>
    </div>
  );
}

export default OrderConfirmationDialog;

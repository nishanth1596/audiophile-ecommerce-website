import { createPortal } from "react-dom";

function OrderSuccess() {
  return createPortal(
    <div className="bg-Black/50 fixed inset-0">OrderSuccess</div>,
    document.getElementById("success")!,
  );
}

export default OrderSuccess;

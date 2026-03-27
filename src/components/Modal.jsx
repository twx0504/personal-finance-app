import FormWrapper from "./FormWrapper";
import { useEffect } from "react";

const Modal = ({ children, modalRef, handleClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key !== "Escape") return;
      handleClose();
      console.log(e.key);
    };

    // Add event listener when the modal is opened
    if (modalRef.current.open) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <dialog
      ref={modalRef}
      className={`w-screen h-screen max-w-screen max-h-screen bg-black/50 open:flex open:items-center open:justify-center`}
    >
      <FormWrapper>{children}</FormWrapper>
    </dialog>
  );
};

export default Modal;

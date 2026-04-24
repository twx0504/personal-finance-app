import { useEffect } from "react";

const Modal = ({ modalRef, handleClose, showModal, children }) => {
  useEffect(() => {
    // Prevent background from moving when a modal is opened
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  useEffect(() => {
    if (!showModal) return;
    const handleKeyDown = (e) => {
      if (e.key !== "Escape") return;
      handleClose();
    };

    // Add event listener when the modal is opened
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, handleClose]);

  return (
    <dialog
      ref={modalRef}
      className={`backdrop:bg-black/50 overflow-visible m-auto rounded-lg`}
    >
      <div className="w-[90vw] rounded-lg p-200 bg-white  md:w-140">
        {children}
      </div>
    </dialog>
  );
};

export default Modal;

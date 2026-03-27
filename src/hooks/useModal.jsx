import { useState, useRef, useCallback } from "react";

const useModal = () => {
  const modalRef = useRef();
  // true: show modal; close: close modal
  const [showModal, setShowModal] = useState(false);

  const handleOpen = useCallback(() => {
    setShowModal(true);
    modalRef.current.showModal();
  }, []);

  const handleClose = useCallback(() => {
    setShowModal(false);
    modalRef.current.close();
  }, []);

  return [showModal, handleOpen, handleClose, modalRef];
};

export default useModal;

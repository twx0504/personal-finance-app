import Modal from "../../ui/Modal";
import FormButton from "../../auth/FormButton";
import modalIcon from "../../../assets/images/icon-close-modal.svg";
const DeleteBudgetModal = ({
  category,
  description,
  modalRef,
  showModal,
  handleClose,
  handleOpen,
  onConfirm,
}) => {
  return (
    <Modal modalRef={modalRef} showModal={showModal} handleClose={handleClose}>
      <div className="relative space-y-250 p-200">
        <h2 className="text-preset-2 md:text-preset-1">Delete '{category}'</h2>
        <p className="text-preset-4 text-grey-500">{description}</p>
        <button
          className="absolute right-0 top-0 cursor-pointer"
          type="button"
          onClick={handleClose}
        >
          <img src={modalIcon} alt="Close modal" />
        </button>
        <FormButton
          buttonName="Yes, Confirm Deletion"
          buttonClassName="bg-red text-white hover:bg-grey-900"
          onClick={onConfirm}
        />
        <FormButton
          buttonName="No, Go Back"
          buttonClassName="bg-white text-grey-500 h-fit hover:text-grey-900"
          onClick={handleClose}
        />
      </div>
    </Modal>
  );
};

export default DeleteBudgetModal;

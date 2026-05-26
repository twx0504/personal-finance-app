import { useEffect } from "react";
import Modal from "../../ui/Modal";
import FormButton from "../../auth/FormButton";
import TextInput from "../../ui/TextInput";
import modalIcon from "../../../assets/images/icon-close-modal.svg";
import PotProgressSection from "./PotProgressSection";
import useField from "../../../hooks/useField";
import useValidation from "../../../hooks/useValidation";
import {
  validateDecimal,
  validateNonEmpty,
  validatePositiveNumber,
} from "../../../utils/validations";
import { ACTIONS } from "../../../constants/action";
import { formatMoney } from "../../../utils/money";

const PotActionModal = ({
  title,
  description,
  buttonName,
  modalRef,
  showModal,
  handleClose,
  handleOpen,
  onSubmit,
  selectedPot,
  type,
  formId,
  balance,
}) => {
  const amountInput = useField("");

  const amountValidation = useValidation();

  const handleOnChange = (e) => {
    const amount = e.target.value;

    if (validateNonEmpty(amount) && !validateDecimal(amount)) return;
    amountInput.onChange(e);

    // Cap the input amount to prevent exceeding available limits:
    // - Withdraw: cannot withdraw more than the pot's current total
    // - Add: cannot add more than the remaining pot target or available current balance, whichever is lower
    const cap =
      type === ACTIONS.WITHDRAW
        ? selectedPot.total / 100
        : Math.min(
            (selectedPot.target - selectedPot.total) / 100,
            balance.current / 100,
          );

    if (amount >= cap) {
      amountInput.reset(cap);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const amount = amountInput.value;
    const isAmountValid = amountValidation.validate(
      amount,
      validatePositiveNumber,
    );

    if (!isAmountValid) return;

    onSubmit(Number(amountInput.value) * 100);
  };

  useEffect(() => {
    if (!showModal) return;

    /* Reset the input field */
    amountInput.reset("");
  }, [showModal, selectedPot]);

  return (
    <Modal modalRef={modalRef} showModal={showModal} handleClose={handleClose}>
      <div className="relative space-y-250 p-200">
        <h2 className="text-preset-2 md:text-preset-1">{title}</h2>
        <p className="text-preset-4 text-grey-500">{description}</p>
        <form id={formId} className="space-y-200" onSubmit={handleSubmit}>
          {/* Progress Bar */}
          {selectedPot && (
            <PotProgressSection
              title="New Amount"
              target={selectedPot.target}
              total={selectedPot.total}
              theme={selectedPot.theme}
              amount={amountInput.value * 100}
              type={type}
            />
          )}
          {/* Amount */}
          <TextInput
            id={`${type}-amount`}
            labelTitle={`Amount to ${type}`}
            leftElement={
              <span className="text-preset-4 text-grey-500 ">RM</span>
            }
            placeholder="e.g., 2000"
            value={amountInput.value}
            onChange={handleOnChange}
            isValid={amountValidation.isValid}
          />
        </form>
        <button
          className="absolute right-0 top-0 cursor-pointer"
          type="button"
          onClick={handleClose}
        >
          <img src={modalIcon} alt="Close modal" />
        </button>
        <FormButton buttonName={buttonName} form={formId} />
      </div>
    </Modal>
  );
};

export default PotActionModal;

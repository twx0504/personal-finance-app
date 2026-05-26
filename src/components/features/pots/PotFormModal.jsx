import { useEffect } from "react";
import Modal from "../../ui/Modal";
import FormButton from "../../auth/FormButton";
import TextInput from "../../ui/TextInput";
import DropDown from "../../ui/DropDown";
import modalIcon from "../../../assets/images/icon-close-modal.svg";
import useField from "../../../hooks/useField";
import useValidation from "../../../hooks/useValidation";
import useDropDown from "../../../hooks/useDropDown";
import { MAX_POT_NAME_LENGTH } from "../../../constants/pot";
import { COLOR_OPTIONS } from "../../../constants/dropdownOptions";
import { DesktopTrigger } from "../../ui/DropDownTriggers";
import { ColorOptionList } from "../../ui/DropDownOptionLists";
import {
  validateDecimal,
  validatePositiveNumber,
  validateNonEmpty,
  validatePotName,
} from "../../../utils/validations";

const PotFormModal = ({
  title,
  description,
  buttonName,
  modalRef,
  showModal,
  handleClose,
  handleOpen,
  onSubmit,
  selectedPot,
  usedColorTags,
  formId,
}) => {
  const potNameInput = useField("");
  const potTargetInput = useField("");

  const nameValidation = useValidation();
  const targetValidation = useValidation();

  const handleTargetChange = (e) => {
    const amount = e.target.value;

    if (validateNonEmpty(amount) && !validateDecimal(amount)) return;
    potTargetInput.onChange(e);
  };

  const firstAvailableColorTag = COLOR_OPTIONS.find(
    (o) => !usedColorTags.includes(o.value),
  );

  const colorTag = useDropDown(
    firstAvailableColorTag?.label || COLOR_OPTIONS[0].label,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = nameValidation.validate(
      potNameInput.value,
      validatePotName,
    );

    const isTargetValid = targetValidation.validate(
      potTargetInput.value,
      validatePositiveNumber,
    );

    if (!isNameValid || !isTargetValid) return;

    onSubmit({
      name: potNameInput.value.trim(),
      target: Number(potTargetInput.value) * 100,
      total: selectedPot ? selectedPot.total : 0,
      theme: COLOR_OPTIONS.find((option) => option.label === colorTag.label)
        ?.value,
    });
  };

  useEffect(() => {
    if (!showModal) return;
    if (selectedPot) {
      colorTag.setLabel(
        COLOR_OPTIONS.find((t) => t.value === selectedPot.theme)?.label,
      );

      potNameInput.reset(selectedPot.name);
      potTargetInput.reset(selectedPot.target / 100);
    } else {
      colorTag.setLabel(
        firstAvailableColorTag?.label || COLOR_OPTIONS[0].label,
      );
      potNameInput.reset("");
      potTargetInput.reset("");
    }
  }, [showModal, selectedPot]);

  return (
    <Modal modalRef={modalRef} showModal={showModal} handleClose={handleClose}>
      <div className="relative space-y-250 p-200">
        <h2 className="text-preset-2 md:text-preset-1">{title}</h2>
        <p className="text-preset-4 text-grey-500">{description}</p>
        <form id={formId} className="space-y-200" onSubmit={handleSubmit}>
          {/* Pot Name */}
          <TextInput
            id="potName"
            labelTitle="Pot Name"
            placeholder="e.g., Rainy Days"
            helperText={`${potNameInput.value.length} of ${MAX_POT_NAME_LENGTH} characters left`}
            value={potNameInput.value}
            onChange={potNameInput.onChange}
            isValid={nameValidation.isValid}
          />
          {/* Target */}
          <TextInput
            id="target"
            labelTitle="Target"
            leftElement={
              <span className="text-preset-4 text-grey-500 ">RM</span>
            }
            placeholder="e.g., 2000"
            value={potTargetInput.value}
            onChange={handleTargetChange}
            isValid={targetValidation.isValid}
          />
          {/* Color Tag */}
          <div className="flex flex-col">
            <span className="text-preset-5-bold text-grey-500 mb-50">
              Color Tag
            </span>
            <DropDown
              dropDownRef={colorTag.dropDownRef}
              isOpen={colorTag.isOpen}
              trigger={
                <DesktopTrigger
                  className="flex w-full items-center"
                  label={colorTag.label}
                  onClick={colorTag.toggle}
                  leftElement={
                    <span
                      className="w-200 h-200 mr-[12px] rounded-full"
                      style={{
                        backgroundColor: COLOR_OPTIONS.find(
                          (o) => o.label === colorTag.label,
                        )?.value,
                      }}
                    ></span>
                  }
                />
              }
              optionList={
                <ColorOptionList
                  data={COLOR_OPTIONS}
                  usedColors={usedColorTags}
                  onSelect={(value) => {
                    const selected = COLOR_OPTIONS.find(
                      (o) => o.value === value,
                    );
                    if (selected) colorTag.setLabel(selected.label);
                    colorTag.toggle();
                  }}
                />
              }
              listClassName="w-full"
            />
          </div>
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

export default PotFormModal;

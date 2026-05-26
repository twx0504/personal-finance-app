import { useState, useEffect } from "react";
import Modal from "../../ui/Modal";
import DropDown from "../../ui/DropDown";
import { DesktopTrigger } from "../../ui/DropDownTriggers";
import { BasicOptionList, ColorOptionList } from "../../ui/DropDownOptionLists";
import { validateDecimal, validateNonEmpty, validatePositiveNumber } from "../../../utils/validations";
import TextInput from "../../ui/TextInput";
import useDropDown from "../../../hooks/useDropDown";
import useField from "../../../hooks/useField";
import useValidation from "../../../hooks/useValidation";
import modalIcon from "../../../assets/images/icon-close-modal.svg";
import FormButton from "../../auth/FormButton";
import {
  BUDGET_CATEGORY_OPTIONS,
  COLOR_OPTIONS,
} from "../../../constants/dropdownOptions";

const BudgetModal = ({
  title,
  description,
  buttonName,
  modalRef,
  showModal,
  handleClose,
  handleOpen,
  onSubmit,
  usedThemes,
  usedCategories,
  selectedBudget,
  formId,
}) => {
  const firstAvailableCategory = BUDGET_CATEGORY_OPTIONS.find(
    (o) => !usedCategories.includes(o.label),
  );
  const firstAvailableTheme = COLOR_OPTIONS.find(
    (o) => !usedThemes.includes(o.value),
  );

  const category = useDropDown(
    firstAvailableCategory?.label || BUDGET_CATEGORY_OPTIONS[0].label,
  );

  const theme = useDropDown(
    firstAvailableTheme?.label || COLOR_OPTIONS[0].label,
  );

  const maximumSpendInput = useField("");

  const maximumSpentValidation = useValidation();

  const handleMaximumSpendChange = (e) => {
    const amount = e.target.value;

    if (validateNonEmpty(amount) && !validateDecimal(amount)) return;
    maximumSpendInput.onChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isMaximumSpentValid = maximumSpentValidation.validate(
      maximumSpendInput.value,
      validatePositiveNumber,
    );

    if (!isMaximumSpentValid) return;

    onSubmit({
      category: category.label,
      maximum: Number(maximumSpendInput.value) * 100,
      theme: COLOR_OPTIONS.find((option) => option.label === theme.label)
        ?.value,
    });
  };

  // When modal opens:
  // - Edit mode (selectedBudget exists): prefill form with current budget data
  // - Add mode: reset form to first available category/theme
  useEffect(() => {
    if (!showModal) return;
    if (selectedBudget) {
      category.setLabel(selectedBudget.category);
      theme.setLabel(
        COLOR_OPTIONS.find((t) => t.value === selectedBudget.theme)?.label,
      );
      maximumSpendInput.reset(selectedBudget.maximum / 100);
    } else {
      category.setLabel(
        firstAvailableCategory?.label || BUDGET_CATEGORY_OPTIONS[0].label,
      );
      theme.setLabel(firstAvailableTheme?.label || COLOR_OPTIONS[0].label);
      maximumSpendInput.reset("");
    }
  }, [showModal, selectedBudget]);

  return (
    <Modal modalRef={modalRef} showModal={showModal} handleClose={handleClose}>
      <div className="relative space-y-250 p-200">
        <h2 className="text-preset-2 md:text-preset-1">{title}</h2>
        <p className="text-preset-4 text-grey-500">{description}</p>
        <form id={formId} className="space-y-200" onSubmit={handleSubmit}>
          {/* Category */}
          <div className="flex flex-col">
            <span className="text-preset-5-bold text-grey-500 mb-50">
              Budget Category
            </span>
            <DropDown
              dropDownRef={category.dropDownRef}
              isOpen={category.isOpen}
              trigger={
                <DesktopTrigger
                  className="flex w-full items-center"
                  label={category.label}
                  onClick={category.toggle}
                />
              }
              optionList={
                <BasicOptionList
                  data={BUDGET_CATEGORY_OPTIONS}
                  usedCategories={usedCategories}
                  onSelect={(value) => {
                    const selected = BUDGET_CATEGORY_OPTIONS.find(
                      (o) => o.value === value,
                    );
                    if (selected) category.setLabel(selected.label);
                    category.toggle();
                  }}
                />
              }
              listClassName="w-full"
            />
          </div>
          {/* Maximum Spend */}
          <TextInput
            id="spend"
            labelTitle="Maximum Spend"
            leftElement={
              <span className="text-preset-4 text-grey-500 ">RM</span>
            }
            placeholder="e.g., 2000"
            value={maximumSpendInput.value}
            onChange={handleMaximumSpendChange}
            isValid={maximumSpentValidation.isValid}
            helperText="Maximum spent value must be > 0."
          />
          {/* Theme */}
          <div className="flex flex-col">
            <span className="text-preset-5-bold text-grey-500 mb-50">
              Theme
            </span>
            <DropDown
              dropDownRef={theme.dropDownRef}
              isOpen={theme.isOpen}
              trigger={
                <DesktopTrigger
                  className="flex w-full items-center"
                  label={theme.label}
                  onClick={theme.toggle}
                  leftElement={
                    <span
                      className="w-200 h-200 mr-[12px] rounded-full"
                      style={{
                        backgroundColor: COLOR_OPTIONS.find(
                          (o) => o.label === theme.label,
                        )?.value,
                      }}
                    ></span>
                  }
                />
              }
              optionList={
                <ColorOptionList
                  data={COLOR_OPTIONS}
                  usedColors={usedThemes}
                  onSelect={(value) => {
                    const selected = COLOR_OPTIONS.find(
                      (o) => o.value === value,
                    );
                    if (selected) theme.setLabel(selected.label);
                    theme.toggle();
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

export default BudgetModal;

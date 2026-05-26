import { useState } from "react";
import ViewHeader from "./ViewHeader";
import AddButton from "../components/features/shared/AddButton";
import PotDetailsCard from "../components/features/pots/PotDetailsCard";
import useFinanceContext from "../hooks/useFinanceContext";
import PotFormModal from "../components/features/pots/PotFormModal";
import PotActionModal from "../components/features/pots/PotActionModal";
import DeleteModal from "../components/features/shared/DeleteModal";
import useModal from "../hooks/useModal";
import { ACTIONS } from "../constants/action";

const Pots = () => {
  const [selectedId, setSelectedId] = useState("");
  const { balance, setBalance, pots, setPots } = useFinanceContext();

  const selectedPot = pots.find((pot) => {
    return pot.id === selectedId;
  });

  const addModal = useModal();
  const editModal = useModal();
  const deleteModal = useModal();
  const withdrawModal = useModal();
  const saveModal = useModal();

  const handleEditOpen = (id) => {
    setSelectedId(id);
    editModal.handleOpen();
  };

  const handleDeleteOpen = (id) => {
    setSelectedId(id);
    deleteModal.handleOpen();
  };
  
  const handleWithdrawOpen = (id) => {
    setSelectedId(id);
    withdrawModal.handleOpen();
  };

  const handleSaveOpen = (id) => {
    setSelectedId(id);
    saveModal.handleOpen();
  };

  const handleAddPot = (newPotItem) => {
    setPots([...pots, { ...newPotItem, id: crypto.randomUUID() }]);
    addModal.handleClose();
  };

  const handleEditPot = (modifiedPotItem) => {
    setPots(
      pots.map((pot) => {
        if (pot.id === selectedPot.id) {
          return { ...modifiedPotItem, id: selectedPot.id };
        }
        return pot;
      }),
    );
    editModal.handleClose();
  };

  const handleDeletePot = () => {
    setPots(pots.filter((pot) => pot.id !== selectedPot.id));
    deleteModal.handleClose();
  };

  const handleAddMoney = (amount) => {
    setBalance({ ...balance, current: balance.current - amount });
    setPots(
      pots.map((pot) => {
        if (pot.id === selectedPot.id) {
          return {
            ...pot,
            total: selectedPot.total + amount,
          };
        }
        return pot;
      }),
    );
    saveModal.handleClose();
  };

  const handleWithdrawMoney = (amount) => {
    setBalance({ ...balance, current: balance.current + amount });
    setPots(
      pots.map((pot) => {
        if (pot.id === selectedPot.id) {
          return {
            ...pot,
            total: selectedPot.total - amount,
          };
        }
        return pot;
      }),
    );
    withdrawModal.handleClose();
  };

  const usedColorTags = pots.map((pot) => pot.theme);

  return (
    <>
      <ViewHeader
        title="Pots"
        actionButton={
          <AddButton buttonName="Add New Pot" onClick={addModal.handleOpen} />
        }
      />
      <div className="space-y-250 xl:grid xl:grid-cols-2 xl:gap-300 xl:space-y-0">
        {pots.map((pot) => (
          <PotDetailsCard
            key={pot.id}
            {...pot}
            handleEditOpen={handleEditOpen}
            handleDeleteOpen={handleDeleteOpen}
            handleSaveOpen={handleSaveOpen}
            handleWithdrawOpen={handleWithdrawOpen}
          />
        ))}
      </div>
      <PotFormModal
        title="Add New Pot"
        description="Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
        buttonName="Add Pot"
        usedColorTags={usedColorTags}
        onSubmit={handleAddPot}
        formId="pot-form-add"
        {...addModal}
      />
      <PotFormModal
        title="Edit Pot"
        description="If your saving targets change, feel free to update your pots."
        buttonName="Save Changes"
        selectedPot={selectedPot}
        usedColorTags={usedColorTags.filter((c) => c !== selectedPot?.theme)}
        onSubmit={handleEditPot}
        formId="pot-form-edit"
        {...editModal}
      />
      <DeleteModal
        title={selectedPot?.name}
        description="Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever."
        onConfirm={handleDeletePot}
        {...deleteModal}
      />
      <PotActionModal
        title={`Add to '${selectedPot?.name}'`}
        description="Add money to your pot to keep it growing. Once added, the money can be withdrawn any time."
        buttonName="Confirm Addition"
        selectedPot={selectedPot}
        type={ACTIONS.ADD}
        onSubmit={handleAddMoney}
        formId="pot-action-add"
        balance={balance}
        {...saveModal}
      />
      <PotActionModal
        title={`Withdraw from '${selectedPot?.name}'`}
        description="Withdraw from your pot to put the money back in your wallet. This will reduce your savings total."
        buttonName="Confirm Withdrawal"
        selectedPot={selectedPot}
        type={ACTIONS.WITHDRAW}
        onSubmit={handleWithdrawMoney}
        formId="pot-action-withdraw"
        balance={balance}
        {...withdrawModal}
      />
    </>
  );
};

export default Pots;

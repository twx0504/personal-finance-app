import CardDetailsHeader from "../shared/CardDetailsHeader";
import PotProgressSection from "./PotProgressSection";
import PotActionSection from "./PotActionSection";
import AddButton from "../shared/AddButton";
import { POT_ACTION_OPTIONS } from "../../../constants/dropdownOptions";

const PotDetailsCard = ({
  id,
  name,
  theme,
  target,
  total,
  handleEditOpen,
  handleDeleteOpen,
  handleSaveOpen,
  handleWithdrawOpen,
}) => {
  return (
    <article className="bg-white px-250 py-300 rounded-lg space-y-400">
      {/* PotDetailHeader */}
      <CardDetailsHeader
        id={id}
        theme={theme}
        cardTitle={name}
        actionOption={POT_ACTION_OPTIONS}
        handleEditOpen={handleEditOpen}
        handleDeleteOpen={handleDeleteOpen}
      />
      {/* ProgressBar */}
      <PotProgressSection
        title="Total Saved"
        target={target}
        total={total}
        theme={theme}
      />
      {/* Buttons */}
      <PotActionSection
        id={id}
        handleSaveOpen={handleSaveOpen}
        handleWithdrawOpen={handleWithdrawOpen}
      />
    </article>
  );
};

export default PotDetailsCard;

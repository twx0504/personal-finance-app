import PotsTotal from "./PotsTotal";
import PotsContainer from "./PotsContainer";

const PotsCard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <PotsTotal />
      <PotsContainer />
    </div>
  );
};

export default PotsCard;

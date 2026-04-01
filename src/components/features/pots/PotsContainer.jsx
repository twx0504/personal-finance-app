import BarLabel from "../shared/BarLabel";
import useFinanceContext from "../../../hooks/useFinanceContext";
import { formatMoney } from "../../../utils/money";
const MAX_SHOWN_POTS = 4;

const PotsContainer = () => {
  const { pots } = useFinanceContext();

  return (
    <div className="flex flex-wrap gap-200 md:ml-250 md:w-[57.2%]">
      {pots.slice(0, MAX_SHOWN_POTS).map(({ name, total, theme }) => (
        <BarLabel
          className="bar-label"
          key={name}
          name={name}
          total={formatMoney(total)}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default PotsContainer;

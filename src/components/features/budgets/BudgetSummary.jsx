import DonutChart from "../../chart/DonutChart";
import DonutContent from "../../chart/DonutContent";
import BarLabel from "../shared/BarLabel";
import { formatMoney } from "../../../utils/money";

const BudgetSummaryOverview = ({
  budgets,
  totalMax,
  totalSpent,
  segmentsData,
}) => (
  <div className="flex flex-col space-y-200 md:flex-row md:space-y-0">
    <DonutChart
      totalMax={totalMax}
      totalSpent={totalSpent}
      segmentsData={segmentsData}
      containerClassName="md:grow"
      canvasClassName="w-60 h-60"
    >
      <DonutContent totalSpent={totalSpent} totalMax={totalMax} />
    </DonutChart>
    <div className="flex flex-wrap gap-200 md:gap-0 md:flex-col md:gap-y-200">
      {budgets.map(({ category, maximum, theme }) => {
        return (
          <BarLabel
            key={category}
            className="bar-label budget-bar-label"
            name={category}
            theme={theme}
            total={formatMoney(maximum)}
          />
        );
      })}
    </div>
  </div>
);

const BudgetSummaryFull = ({ totalMax, totalSpent, segmentsData }) => (
  <div className="bg-white px-250 py-300 rounded-lg md:flex md:items-center md:p-400 md:gap-x-100 xl:block xl:w-[40.38%] xl:h-fit">
    <DonutChart
      totalMax={totalMax}
      totalSpent={totalSpent}
      segmentsData={segmentsData}
      containerClassName="mb-400 py-250 px-400 md:mb-0 md:p-200"
      canvasClassName="w-60 h-60 md:m-100"
    >
      <DonutContent totalSpent={totalSpent} totalMax={totalMax} />
    </DonutChart>
    <div className="md:flex-1">
      <h2 className="text-preset-2 mb-300">Spending Summary</h2>
      <div className="space-y-200">
        {segmentsData.map(({ category, maximum, spent, theme }) => (
          <div
            key={category}
            className="flex justify-between text-preset-4 text-grey-500 pb-200 border-b border-b-grey-100 last:border-b-0"
          >
            <p className="relative pl-200">
              <span>{category}</span>
              <span
                className="absolute top-0 bottom-0 left-0 w-50 rounded-full"
                style={{
                  backgroundColor: theme,
                }}
              ></span>
            </p>
            <p>
              <span className="mr-100 text-preset-3 text-grey-900">
                {formatMoney(spent)}
              </span>
              <span className="text-preset-5">of {formatMoney(maximum)}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const BudgetSummary = ({
  totalMax,
  totalSpent,
  segmentsData,
  budgets,
  variant = "full",
}) => {
  return (
    <>
      {variant === "overview" ? (
        <BudgetSummaryOverview
          totalSpent={totalSpent}
          totalMax={totalMax}
          budgets={budgets}
          segmentsData={segmentsData}
        />
      ) : (
        <BudgetSummaryFull
          totalSpent={totalSpent}
          totalMax={totalMax}
          budgets={budgets}
          segmentsData={segmentsData}
        />
      )}
    </>
  );
};

export default BudgetSummary;

const BillRow = ({ title, amount, billRowClassName }) => {
  return (
    <div
      className={`${billRowClassName} flex justify-between border-l-4 rounded-lg bg-beige-100 pl-200 pr-200 pt-250 pb-250`}
    >
      <span className="text-preset-4 text-grey-500">{title}</span>
      <span className="text-preset-4-bold">{amount}</span>
    </div>
  );
};

export default BillRow;

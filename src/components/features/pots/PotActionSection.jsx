const PotActionSection = ({ id, handleSaveOpen, handleWithdrawOpen }) => {
  return (
    <section className="flex gap-x-200 h-13.25 text-preset-4-bold">
      <button
        className="flex-1 bg-beige-100 rounded-lg hover:bg-grey-900 hover:text-white cursor-pointer"
        onClick={() => handleSaveOpen(id)}
      >
        + Add Money
      </button>
      <button
        className="flex-1 bg-beige-100 rounded-lg hover:bg-grey-900 hover:text-white cursor-pointer"
        onClick={() => handleWithdrawOpen(id)}
      >
        Withdraw
      </button>
    </section>
  );
};

export default PotActionSection;

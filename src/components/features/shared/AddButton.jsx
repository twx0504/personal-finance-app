const AddButton = ({ buttonName, onClick }) => {
  return (
    <button
      className="p-200 rounded-lg bg-grey-900 text-preset-4-bold text-white cursor-pointer"
      onClick={onClick}
    >{`+ ${buttonName}`}</button>
  );
};

export default AddButton;

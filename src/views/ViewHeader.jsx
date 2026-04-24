const ViewHeader = ({ title, actionButton }) => {
  return (
    <header className="flex items-center mb-400">
      <h1 className="flex-1 text-preset-1">{title}</h1>
      {actionButton}
    </header>
  );
};

export default ViewHeader;

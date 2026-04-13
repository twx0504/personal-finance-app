const TransactionListHeader = ({ headerConfig }) => {
  return (
    <div className="hidden mt-300 mb-300 pt-250 pb-250 text-preset-5 text-grey-500 border-b border-b-grey-100  md:grid md:grid-cols-[10.7fr_3fr_3fr_5fr] md:gap-400">
      {headerConfig.map(({ title, className }, index) => (
        <span key={title} className={`${className} ${index === headerConfig.length - 1 && `text-right`}`}>
          {title}
        </span>
      ))}
    </div>
  );
};

export default TransactionListHeader;

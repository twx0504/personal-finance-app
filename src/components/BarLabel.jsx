const BarLabel = ({ className, name, theme, total }) => {
  return (
    <div className={className}>
      <span className="text-preset-5 text-grey-500 mb-50">{name}</span>
      <span className="text-preset-4-bold">{total}</span>
      <span
        className="absolute top-0 w-50 bottom-0 left-0 rounded-full"
        style={{
          backgroundColor: theme,
        }}
      ></span>
    </div>
  );
};

export default BarLabel;

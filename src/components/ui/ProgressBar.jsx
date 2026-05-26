const ProgressBar = ({
  theme,
  total,
  target,
  trackClassName,
  barClassName,
  delta = undefined,
}) => {
  const showOverlay = !!delta && delta !== 0;

  const maxWithdraw = Math.min(Math.abs(delta), total);
  const maxSave = Math.min(Math.abs(delta), target - total);

  const baseProgress = Math.max(
    delta < 0
      ? ((total - Math.abs(delta)) / target) * 100
      : (total / target) * 100,
    0,
  );

  const newProgress =
    delta < 0 ? (maxWithdraw / target) * 100 : (maxSave / target) * 100;

  return (
    /* Track */
    <div className={`${trackClassName}`}>
      {/* Bar */}
      <div
        className={`${barClassName} ${delta === undefined ? "rounded-full" : "rounded-tl-full rounded-bl-full"}`}
        style={{
          width: `${baseProgress}%`,
          backgroundColor: delta === undefined ? theme : "black",
        }}
      ></div>
      {showOverlay && (
        <div
          className={`${barClassName} rounded-tr-full rounded-br-full ${delta > 0 && "bg-green"} ${delta < 0 && "bg-red"} ${delta < 0 && Math.abs(delta) === total && "rounded-tl-full rounded-bl-full"}`}
          style={{
            width: `${newProgress}%`,
          }}
        ></div>
      )}
    </div>
  );
};

export default ProgressBar;

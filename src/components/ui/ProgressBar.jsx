const ProgressBar = ({ theme, progress, trackClassName, barClassName }) => {
  return (
    /* Track */
    <div className={trackClassName}>
      {/* Bar */}
      <div
        className={barClassName}
        style={{
          width: `${progress}%`,
          backgroundColor: theme,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;

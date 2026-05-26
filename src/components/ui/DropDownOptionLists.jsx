export const BasicOptionList = ({ data, onSelect, usedCategories = [] }) => {
  return (
    <ul
      className={`shadow-[0_0_8px_rgba(0,0,0,0.15)] text-nowrap rounded-lg mt-[12px] bg-white max-h-40 md:max-h-60 overflow-y-scroll scrollbar-hidden`}
    >
      {data.map((option, index) => {
        return (
          <li
            className={`group last:border-b-0 border-b border-b-grey-100 first:rounded-t-lg last:rounded-b-lg ${usedCategories.includes(option.label) ? "" : "hover:bg-grey-900 hover:text-white"}`}
            key={index}
          >
            <button
              type="button"
              className="flex items-center w-full pt-[12px] pb-[12px] pl-250 pr-250 first:mt-0 text-left cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => onSelect(option.value)}
              disabled={usedCategories.includes(option.label)}
            >
              <span
                className={`text-grey-500 ${usedCategories.includes(option.label) ? "" : "group-hover:text-grey-100"}`}
              >
                {option.label}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export const ColorOptionList = ({ data, onSelect, usedColors = [] }) => {
  return (
    <ul
      className={`shadow-[0_0_8px_rgba(0,0,0,0.15)] text-nowrap rounded-lg mt-[12px] bg-white max-h-40 md:max-h-60 overflow-y-scroll scrollbar-hidden`}
    >
      {data.map((option, index) => {
        return (
          <li
            className={`group last:border-b-0 border-b border-b-grey-100 first:rounded-t-lg last:rounded-b-lg ${usedColors.includes(option.value) ? "" : "hover:bg-grey-900 hover:text-white"}`}
            key={index}
          >
            <button
              type="button"
              className="flex items-center w-full pt-[12px] pb-[12px] pl-250 pr-250 first:mt-0 text-left cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => onSelect(option.value)}
              disabled={usedColors.includes(option.value)}
            >
              <div className="flex-1 flex items-center">
                <span
                  className="rounded-full w-200 h-200 mr-[12px]"
                  style={{
                    backgroundColor: option.value,
                  }}
                ></span>
                <span
                  className={`text-grey-500 ${usedColors.includes(option.value) ? "" : "group-hover:text-grey-100"}`}
                >
                  {option.label}
                </span>
              </div>
              {usedColors.includes(option.value) && (
                <span className="text-preset-5 text-grey-500">
                  Already Used
                </span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export const ActionOptionList = ({ data, onSelect }) => {
  return (
    <ul
      className={`shadow-[0_0_8px_rgba(0,0,0,0.15)] text-nowrap rounded-lg mt-[12px] bg-white max-h-60 overflow-y-scroll scrollbar-hidden`}
    >
      {data.map((option, index) => {
        return (
          <li
            className={`group last:border-b-0 border-b border-b-grey-100 first:rounded-t-lg last:rounded-b-lg hover:bg-grey-900 hover:text-white ${option.isDangerous && "hover:bg-red hover:text-white"}`}
            key={index}
          >
            <button
              type="button"
              className="flex items-center w-full pt-[12px] pb-[12px] pl-250 pr-250 first:mt-0 text-left cursor-pointer"
              onClick={() => onSelect(option.value)}
            >
              <span
                className={`text-grey-500 group-hover:text-grey-100 ${option.isDangerous && "text-red"}`}
              >
                {option.label}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

import { Link } from "react-router";
import rightCaretIcon from "../../../assets/images/icon-caret-right.svg";

const SectionHeader = ({ title, link, linkDescription, headerClassName  }) => {
  return (
    <div className={`${headerClassName } flex justify-between pb-250`}>
      <h2 className="text-preset-2">{title}</h2>
      <Link className="flex items-center text-preset-4 text-grey-500" to={link}>
        <span className="pr-100">{linkDescription}</span>
        <img
          className="w-[12px] h-[12px] ml-50"
          src={rightCaretIcon}
          alt="Right caret icon"
        />
      </Link>
    </div>
  );
};

export default SectionHeader;

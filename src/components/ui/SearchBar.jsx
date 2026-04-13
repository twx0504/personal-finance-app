import TextInput from "./TextInput";
import searchIcon from "../../assets/images/icon-search.svg";

const SearchBar = ({
  id,
  name,
  placeholder = "Search...",
  labelTitle = "Search",
  hideLabel = true,
  autocomplete = "off",
  onSearch,
  searchTerm,
  ...props
}) => {
  const handleSearch = (e) => {
    onSearch(e.target.value.trim());
  };

  const handleKeyDown = (e) => {
    const key = e.key;
    if (key === "Escape") {
      onSearch("");
    }
  };

  return (
    <TextInput
      id={id}
      labelTitle={labelTitle}
      type="text"
      name={name}
      placeholder={placeholder}
      hideLabel={hideLabel}
      rightElement={
        <img
          className="pointer-events-none"
          src={searchIcon}
          alt=""
          aria-hidden="true"
        />
      }
      autoComplete={autocomplete}
      {...props}
      value={searchTerm}
      onChange={handleSearch}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchBar;

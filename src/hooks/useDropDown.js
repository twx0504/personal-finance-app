import { useState, useEffect, useRef, useCallback } from "react";

const useDropDown = (
  initialLabel,
  activeType = null, // What is the current activce dropdown?
  myType = null, // What is this dropdown?
  onToggle = null,
) => {
  const [label, setLabel] = useState(initialLabel || "");
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = myType ? activeType === myType : internalIsOpen;

  const handleToggle = useCallback(() => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen((prev) => !prev);
    }
  }, [onToggle]);

  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const target = e.target;
      if (isOpen && dropDownRef.current && !dropDownRef.current.contains(target)) {
        handleToggle();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleToggle();
      }
    };

    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onToggle]);
  return { dropDownRef, label, setLabel, isOpen, toggle: handleToggle };
};

export default useDropDown;

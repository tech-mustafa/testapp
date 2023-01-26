import React, { useState } from "react";

import styles from "./dropdown.module.css";
import Button from "../button";
import { DropdownTypes, NavigationRoutes } from "../../enums/DropdownType.enum";
import HomeIcon from "../../assets/home.svg";
import AboutIcon from "../../assets/about.svg";
import ContactIcon from "../../assets/contact.svg";

export type DropdownList = {
  lable: DropdownTypes;
  value: NavigationRoutes;
};

interface IDropDownProps {
  options: DropdownList[];
  onClick: (actionType: NavigationRoutes) => void;
}

const Dropdown: React.FC<IDropDownProps> = ({ options, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getIcon = (iconType: DropdownTypes) => {
    switch (iconType) {
      case DropdownTypes.CONTACT:
        return ContactIcon;
      case DropdownTypes.ABOUT:
        return AboutIcon;
      case DropdownTypes.HOME:
        return HomeIcon;
      default:
        return "";
    }
  };

  const handleDropDownChange = (action: NavigationRoutes) => {
    setIsOpen(false);
    onClick(action);
  };

  return (
    <div className={styles.dropdown}>
      <Button text="Dropdown" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <ul className={styles.dropdown__options}>
          {options.map((listItem, index) => {
            return (
              <li
                className={styles["dropdown__options-item"]}
                key={index}
                onClick={() => {
                  handleDropDownChange(listItem.value);
                }}
              >
                <img
                  className={styles["dropdown__options-item-icon"]}
                  src={getIcon(listItem.lable)}
                  alt="icon"
                />
                <span className={styles["dropdown__options-item-text"]}>
                  {listItem.lable}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

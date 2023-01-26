import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button";
import Dropdown, { DropdownList } from "../dropdown";
import Popup from "../popup";
import TextField from "../text-field/TextField";
import styles from "./header.module.css";
import DropdownData from "../../data/data.json";

const data: DropdownList[] = JSON.parse(
  JSON.stringify(DropdownData.dropdownData)
);

const Header: React.FC = () => {
  const navigate = useNavigate();

  const clickHandler = (action: "about" | "contact") => {
    navigate(["/", action].join(""));
  };

  const handleDropDownChange = (actionType: string) => {
    navigate(actionType);
  };

  return (
    <header className={styles.header}>
      <Popup title="Popup Header">
        <TextField inputType="text" placeholder="Enter something" shoulFocus />
      </Popup>
      <div className={styles.header__end}>
        <Button
          text="About"
          onClick={() => {
            clickHandler("about");
          }}
        />
        <Button
          text="Contact"
          onClick={() => {
            clickHandler("contact");
          }}
        />
        <Dropdown options={data} onClick={handleDropDownChange} />
      </div>
    </header>
  );
};

export default Header;

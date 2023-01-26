import React, { MutableRefObject, useEffect, useRef } from "react";
import styles from "./textfield.module.css";

interface Props {
  placeholder: string;
  inputType: "text" | "password" | "email" | "number";
  shoulFocus?: boolean;
}

const TextField: React.FC<Props> = ({
  placeholder,
  inputType,
  shoulFocus = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(
    null
  ) as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    //to focus the textfield on the first launch
    if (shoulFocus) {
      inputRef.current.focus();
    }
  }, [inputRef, shoulFocus]);

  return (
    <input
      className={styles.input}
      type={inputType}
      placeholder={placeholder}
      ref={inputRef}
    />
  );
};

export default TextField;

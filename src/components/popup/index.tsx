import React, { useState } from "react";
import styles from "./popup.module.css";
import closeIcon from "../../assets/closs.svg";
import Button from "../button";

interface DialogProps {
  title: string;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ title, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = () => {
    setOpen(false);
  };

  const openPopup = () => {
    setOpen(true);
  };

  return (
    <>
      <Button text="Open Popup" onClick={openPopup} />
      {open && (
        <div className={styles.dialog}>
          <div className={styles.dialog__backdrop} onClick={onClose} />
          <div className={styles.dialog__content}>
            <div className={styles.dialog__header}>
              <h2 className={styles.dialog__title}>{title}</h2>
              <img
                src={closeIcon}
                alt="close"
                className={styles["dialog__close-icon"]}
                onClick={onClose}
              />
            </div>
            <div className={styles.dialog__children}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;

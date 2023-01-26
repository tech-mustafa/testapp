import React from "react";
import styles from "./page.module.css";

interface IPageProps {
  pageText: string;
}

const Page: React.FC<IPageProps> = ({ pageText }) => {
  return (
    <div className={styles.page}>
      <span className={styles.page__content}>{pageText}</span>
    </div>
  );
};

export default Page;

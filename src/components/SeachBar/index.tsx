import React from "react";
import styles from "./styles.module.css";
export const SearchBar: React.FC = () => {
  localStorage.setItem("searchInput", "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    localStorage.setItem("searchInput", `${e.target.value}`);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        //value={saveInput}
      />
    </div>
  );
};

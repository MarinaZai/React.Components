import React from "react";
import styles from "./styles.module.css";
export class SearchBar extends React.Component {
  state = {
    searchInput: "",
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const input = event.target.value;
    this.setState(() => input);
    localStorage.setItem("searchInput", input);
  };
  render() {
    return (
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Search here"
          onChange={this.handleChange}
          //value={this.state.searchInput}
        />
      </div>
    );
  }
}

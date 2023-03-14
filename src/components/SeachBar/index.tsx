import React from "react";
import styles from "./styles.module.css";

export class SearchBar extends React.Component {
  state = {
    searchInput: "",
  };

  componentDidMount() {
    const searchInput = localStorage.getItem("searchInput");
    if (searchInput) {
      this.setState({ searchInput });
    }
  }

  componentWillUnmount() {
    localStorage.setItem("searchInput", this.state.searchInput);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    this.setState({ searchInput: input });
  };

  render() {
    return (
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="search"
          placeholder="Search here"
          onChange={this.handleChange}
          value={this.state.searchInput}
        />
      </div>
    );
  }
}

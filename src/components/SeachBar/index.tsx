import React from "react";
import styles from "./styles.module.css";

interface SearchBarProps {
  onSearch: (input: string) => void;
}

export class SearchBar extends React.Component<SearchBarProps> {
  state = {
    searchInput: "",
  };

  componentDidMount() {
    const searchInput = localStorage.getItem("searchInput");
    this.setState({ searchInput });
  }

  componentWillUnmount() {
    localStorage.setItem("searchInput", this.state.searchInput);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    this.setState({ searchInput: input });
    this.props.onSearch(input);
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

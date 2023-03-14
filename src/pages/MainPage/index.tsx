import React from "react";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SeachBar";

import { sneakers } from "../../static/data";
import styles from "./styles.module.css";

export class MainPage extends React.Component {
  state = {
    searchInput: "",
  };

  handleSearch = (input: string) => {
    this.setState({ searchInput: input });
  };

  render() {
    const filteredSneakers = sneakers.filter((sneaker) => {
      const { name, size, price } = sneaker;
      const input = this.state.searchInput.toLowerCase();

      return (
        name.toLowerCase().includes(input) ||
        size.toString().includes(input) ||
        price.toString().includes(input)
      );
    });

    return (
      <div className={styles.mainPage}>
        <h2>What are you looking for today?</h2>
        <SearchBar onSearch={this.handleSearch} />
        <div className={styles.cardsBlock}>
          {filteredSneakers.map((sneaker) => {
            return (
              <Card
                key={sneaker.id}
                src={sneaker.src}
                name={sneaker.name}
                size={sneaker.size}
                price={sneaker.price}
                tel={sneaker.tel}
                email={sneaker.email}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

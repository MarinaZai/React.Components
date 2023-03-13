import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SeachBar";
import { sneakers } from "../../static/data";
import styles from "./styles.module.css";
import React from "react";

export class MainPage extends React.Component {
  render() {
    return (
      <div className={styles.mainPage}>
        <h2>What are you looking for today ?</h2>
        <SearchBar />
        <div className={styles.cardsBlock}>
          {sneakers.map((sneaker) => {
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

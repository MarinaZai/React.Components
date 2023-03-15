import styles from "./styles.module.css";
import phone from "../../assets/phone.png";
import emailIcon from "../../assets/emailIcon.png";
import heart from "../../assets/heart.png";
import React from "react";

type CardPropsType = {
  src: string;
  name: string;
  size: string;
  price: string;
  tel: number;
  email: string;
};
export class Card extends React.Component<CardPropsType> {
  render() {
    return (
      <div className={styles.card}>
        <img src={this.props.src} alt={this.props.price} />
        <div className={styles.cardDescription}>
          <span>{this.props.name}</span>
          <span>Size: {this.props.size}</span>
          <span>Price: {this.props.price}</span>
        </div>
        <div className={styles.cardImg}>
          <div>
            <a href={`tel:${this.props.tel}`}>
              <img src={phone} alt="tel" />
            </a>
            <a href={`mailto:${this.props.email}`}>
              <img src={emailIcon} alt="email" />
            </a>
          </div>
          <img src={heart} alt="heart" />
        </div>
      </div>
    );
  }
}

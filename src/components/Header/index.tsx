import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export class Header extends React.Component {
  render() {
    return (
      <>
        <div className={styles.header}>
          <Link to="/">Main page</Link>
          <Link to="/about">About us</Link>
        </div>
      </>
    );
  }
}

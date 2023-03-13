import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export class Header extends React.Component {
  render() {
    return (
      <>
        <div className={styles.header}>
          <Link to="/" className={styles.linkPage}>
            Main page
          </Link>
          <Link to="/about" className={styles.linkPage}>
            About us
          </Link>
        </div>
      </>
    );
  }
}

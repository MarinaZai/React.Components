import * as React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export class Header extends React.Component {
  render() {
    return (
      <>
        <div className={styles.header}>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "green",
                  }
                : {}
            }
            className={styles.linkPage}
          >
            Main page
          </NavLink>
          <NavLink
            to="/about"
            className={styles.linkPage}
            style={({ isActive }) =>
              isActive
                ? {
                    color: "green",
                  }
                : {}
            }
          >
            About us
          </NavLink>
        </div>
      </>
    );
  }
}

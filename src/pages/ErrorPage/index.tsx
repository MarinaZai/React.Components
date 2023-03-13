import React from "react";
import styles from "./styles.module.css";
import Gummy404 from "../../assets/Gummy404.jpeg";
export class ErrorPage extends React.Component {
  render() {
    return (
      <div className={styles.error}>
        <div className={styles.errorTranscription}>
          <h4>OOPS!</h4>
          <h5>404 error</h5>
          <p>The page you are looking for can not found.</p>
        </div>
        <img src={Gummy404} alt="toy" />
      </div>
    );
  }
}

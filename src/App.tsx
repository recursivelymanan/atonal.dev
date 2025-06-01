import { CiMail } from "react-icons/ci";

import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <img className={styles.image} src={logo} />
      <div className={styles.projectsList}>
        <span className={styles.label}>Products</span>
        <Projects />
      </div>
      <div className={styles.contact}>
        <span className={styles.label}>Contact</span>
        <div className={styles.row}>
          <CiMail size={40} />
          <span className={styles.email}>contact [at] atonal [dot] dev</span>
        </div>
      </div>
    </div>
  );
};

export default App;

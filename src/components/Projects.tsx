import { PortfolioEntryList } from "../content/PortfoilioEntries";
import EntryCard from "./EntryCard";

import styles from "../styles/EntryCard.module.css";

const Projects = () => {
  return (
    <div className={styles.grid}>
      {PortfolioEntryList.map((entry) => (
        <EntryCard entry={entry} />
      ))}
    </div>
  );
};

export default Projects;

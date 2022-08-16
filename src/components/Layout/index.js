import Header from "../Header";
import Sidebar from "../Sidebar";

import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

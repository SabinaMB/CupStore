import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}></div>
      <div className={styles.colorSection}>
        <h1 className={styles.motto}>A cup as unique as your taste</h1>
        <p className={styles.link}>Discover your favorite</p>
      </div>
    </div>
  );
}
export default HomePage;

import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img src="/landingPage.png" alt="landing page" />
      </div>
      <h1 className={styles.motto}>A cup as unique as your taste</h1>
      <p className={styles.link}>Discover your favorite</p>
    </div>
  );
}
export default HomePage;

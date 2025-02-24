import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src="/landingPage.png" alt="landing page" />

      <h1 className={styles.motto}>A cup as unique as your taste</h1>
      <p className={styles.link}>Discover more</p>
    </div>
  );
}
export default HomePage;

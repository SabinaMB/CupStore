import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}></div>
      <div className={styles.colorSection}>
        <p>See our products</p>
        <h1>A cup as unique as your taste</h1>
      </div>
    </div>
  );
}
export default HomePage;

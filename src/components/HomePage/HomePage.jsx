import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 400;
    const newOpacity = 1 - Math.min(scrollPosition / maxScroll, 1);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} style={{ opacity }}>
      <img className={styles.image} src="/landingPage.png" alt="landing page" />

      <h1 className={styles.motto}>A cup as unique as your taste</h1>
      <p className={styles.link}>Discover more</p>
    </div>
  );
}
export default HomePage;

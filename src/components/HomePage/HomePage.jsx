import React, { useEffect, useState } from "react";
import style from "./HomePage.module.css";

function HomePage() {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = 800;
    const newOpacity = 1 - Math.min(scrollPosition / maxScroll, 1000);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.container} style={{ opacity }}>
      <img className={style.image} src="/landingPage.png" alt="landing page" />

      <h1 className={style.motto}>A cup as unique as your taste</h1>
      <p className={style.link}>Discover more</p>
    </div>
  );
}
export default HomePage;

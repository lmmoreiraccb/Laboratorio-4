import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <div>
          <h1>
            <span>
              Hello
              <span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Douglass Tomas</span>
          </h1>
        </div>
      </header>
      <section className={styles.infoSection}>
        <img
          src="/beru.jpg"
          alt="Imagen"
          className={styles.image}
          />
        <div className={styles.infoContainer}>
          <span className={styles.title + " " + styles.yellowText}>Douglass</span>
          <br />
          <span className={styles.title}>Tomas</span>
          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText}>Age: </span> 16
              </li>
              <li>
                <span className={styles.grayText}>Nationality: </span> Peru
              </li>
              <li>
                <span className={styles.grayText}>Skill set: </span> Sell IceCreams
              </li>
              <li>
                <span className={styles.grayText}>Langages: </span> English, Spanish
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
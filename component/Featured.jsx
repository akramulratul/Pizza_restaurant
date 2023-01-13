import styles from "../styles/Featured.module.css";
import Image from "next/image";

const images = [
  "/img/featured.jpg",
  "/img/featured2.jpg",
  "/img/featured3.jpg",
  "/img/featured4.jpg",
];

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image src="/img/arrowl.png" alt="" fill contain />
      </div>
      <div className={styles.wrapper}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" fill contain/>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image src="/img/arrowr.png" alt="" fill contain />
      </div>
    </div>
  );
};

export default Featured;

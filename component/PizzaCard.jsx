import Image from "next/image";
import Styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={Styles.container}>
      <Image src="/img/pizza.png" alt="" width="300" height="300" />
      <h1 className={Styles.title}>FIORI DI ZUCCA</h1>
      <span className={Styles.price}>$19.90</span>
      <p className={Styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;

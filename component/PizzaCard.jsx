import Image from "next/image";
import Styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  console.log(pizza);
  return (
    <div className={Styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="300" height="300" />
      </Link>
      <h1 className={Styles.title}>{pizza.title}</h1>
      <span className={Styles.price}>{pizza.prices[0]}</span>
      <p className={Styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;

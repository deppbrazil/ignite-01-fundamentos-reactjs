import style from "./Header.module.css";
import IgniteBrand from "../assets/ignite-brand.svg";

export function Header() {
  return (
    <header className={style.header}>
      <img src={IgniteBrand} alt="Ignite logotipo" />
    </header>
  );
}

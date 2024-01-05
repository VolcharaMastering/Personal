import Link from "next/link";
import Image from "next/image";

import "./TheHeader.scss";

import SnMenu from "../SnMenu/SnMenu";
import logo from "../../images/vmstr-logo.svg";

export default function TheHeader() {
  return (
    <header className="header">
      <Link href="/" className="header__logo">
        <Image src={logo} height={55} width={55} alt="Logo" />
      </Link>
      <nav className="header__menu">
        <Link href="/" className="header__link">
          Главная
        </Link>
        <Link href="/about_tech" className="header__link">
          Технологии и скиллы
        </Link>
        <Link href="/projects" className="header__link">
          Мои проекты
        </Link>
      </nav>
      <SnMenu />
    </header>
  );
}

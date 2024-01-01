import Link from "next/link";
import "./TheHeader.scss";
import Image from "next/image";
import logo from "../../images/vmstr-logo.svg";
import tgLogo from "../../images/tg.svg";
import mailLogo from "../../images/mail.svg";
import linkedinLogo from "../../images/linkedin.svg";

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
      <nav className="header__soc-menu">
        <Link href="https://t.me/Ya_est_grut" className="header__soc-link">
          <div className="header__hover"></div>
          <Image src={tgLogo} alt="telegram Logo" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/aleksey-barabanov-179600260"
          className="header__soc-link"
        >
          <div className="header__hover"></div>
          <Image src={linkedinLogo} height={38} width={38} alt="linkedIn Logo" />
        </Link>
        <Link href="mailto:vmstr@vmstr.ru"  className="header__soc-link">
          <div className="header__hover"></div>
          <Image src={mailLogo} width={44} alt="mail Logo" />
        </Link>
      </nav>
    </header>
  );
}

import Link from "next/link";

export default function TheHeader() {
  return (
    <header className="header">
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
    </header>
  );
}

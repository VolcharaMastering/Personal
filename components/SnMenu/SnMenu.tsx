import Link from "next/link";
import Image from "next/image";

import './SnMenu.scss';

import tgLogo from "../../images/tg.svg";
import mailLogo from "../../images/mail.svg";
import linkedinLogo from "../../images/linkedin.svg";

function SnMenu() {
  return (
    <nav className="sn-menu">
      <Link href="https://t.me/Ya_est_grut" target="_blank" className="sn-menu__link">
        <div className="sn-menu__hover"></div>
        <Image src={tgLogo} alt="telegram Logo" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/aleksey-barabanov-179600260" target="_blank"
        className="sn-menu__link"
      >
        <div className="sn-menu__hover"></div>
        <Image src={linkedinLogo} height={38} width={38} alt="linkedIn Logo" />
      </Link>
      <Link href="mailto:vmstr@vmstr.ru" target="_blank" className="sn-menu__link">
        <div className="sn-menu__hover"></div>
        <Image src={mailLogo} width={44} alt="mail Logo" />
      </Link>
    </nav>
  );
}

export default SnMenu;

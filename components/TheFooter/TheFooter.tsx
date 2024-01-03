import Link from "next/link";
import Image from "next/image";

import "./TheFooter.scss"

import SnMenu from "../SnMenu/SnMenu";
import logo from "../../images/vmstr-logo.svg";

export default function TheFooter() {
  return (
    <footer className="footer">
      <Image src={logo} height={60} width={60} alt="Authors logo" />
      &copy;VMSTR-Studio
       <SnMenu />
    </footer>
  );
}

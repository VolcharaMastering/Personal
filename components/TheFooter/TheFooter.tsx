import Image from "next/image";
import logo from "../../images/vmstr-logo.svg";

export default function TheFooter() {
  return (
    <footer className="footer">
      <Image src={logo} height={150} width={150} alt="Authors logo" />
      &copy;VMSTR-Studio
    </footer>
  );
}

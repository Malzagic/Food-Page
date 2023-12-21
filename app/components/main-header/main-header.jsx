import MainHeaderBackground from "./main-header-background";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./nav-link";

import logoImg from "@/assets/logo.png";
import styles from "./main-header.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href={"/"} className={styles.logo}>
          <Image src={logoImg} alt="A plate with food in it" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href={"/meals"}>Browser Meals</NavLink>
            </li>
            <li>
              <NavLink href={"/community"}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

import { ReactNode } from "react";
import { useMenu } from "../../hooks/Menu";
import { Header } from "../Header";


import Sidebar from "../Sidebar";

type GlobalWrapper = {
  children: ReactNode;
}

import styles from './styles.module.scss';

export function GlobalWrapper({ children }: GlobalWrapper){
  const { isOpenMenu } = useMenu();

  return(
    <>
      <Sidebar />
      <Header />
      <section className={`${styles.container} ${isOpenMenu && styles.open}`}>
        {children}
      </section>
    </>
  )
}
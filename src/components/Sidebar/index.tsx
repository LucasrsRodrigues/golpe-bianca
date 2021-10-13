import styles from './styles.module.scss';
import { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiGridAlt, BiLogOut, BiMenuAltRight, BiUser } from 'react-icons/bi';
import { useMenu } from '../../hooks/Menu';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { getPathRoute } from '../../utils';
import Head from 'next/head';

export default function Sidebar() {
  const { changeVisibilty, isOpenMenu } = useMenu();
  const [path, setPath] = useState('/');

  const { asPath } = useRouter();

  useEffect(() => {
    setPath(getPathRoute(asPath));
  }, [path, asPath]);

  return (
    <>
      <div className={`${styles.sidebar} ${isOpenMenu && styles.open}`}>
        <Head>
          <title>.:GRBank:. Atendimento | Clientes</title>
        </Head>
        <div className={styles.logoDetails}>
          <div className={styles.logo_name}>GRBank</div>
          {isOpenMenu ? <BiMenuAltRight fontSize={20} className={styles.btn} onClick={changeVisibilty} /> : <GiHamburgerMenu fontSize={20} className={styles.btn} onClick={changeVisibilty} />}
        </div>
        <ul className={styles.navList}>
          <li>
            <Link href={`/${path}/dashboard`}>
              <a>
                <BiGridAlt />
                <span className={styles.links_name}>Dashboard</span>
              </a>
            </Link>
            <span className={styles.tooltip}>Dashboard</span>
          </li>

          <li>
            <Link href={`/${path}/clientes`}>
              <a>
                <BiUser />
                <span className={styles.links_name}>Clientes</span>
              </a>
            </Link>
            <span className={styles.tooltip}>Clientes</span>
          </li>

          <li className={styles.profile}>
            <div className={styles.profileDetails}>
              <img src="https://avatars.dicebear.com/api/male/john.svg" alt="profileImg" />
              <div className={styles.name_job}>
                <div className={styles.name}>Prem Shahi</div>
                <div className={styles.job}>{path}</div>
              </div>
            </div>
            <BiLogOut className={styles.logOut} />
          </li>
        </ul>
      </div>
    </>
  )
}
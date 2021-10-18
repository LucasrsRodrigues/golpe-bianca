import styles from './styles.module.scss';
import { BsFullscreenExit } from 'react-icons/bs';
import { FiBell, FiMessageSquare } from 'react-icons/fi';

export function Header(){
  return(
    <div className={styles.containerHeader}>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <a>
              <BsFullscreenExit />
            </a>
          </div>
          <div className={styles.icon}>
            <a>
              <FiBell />
              <span className={styles.pulse} />
            </a>
          </div>
          <div className={styles.icon}>
            <a>
              <FiMessageSquare />
              <span className={styles.pulseDanger} />
            </a>
          </div>
        </div>
    </div>
  );
}
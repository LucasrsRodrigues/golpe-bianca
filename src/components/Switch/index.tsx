import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  rounded?: boolean;
  isToggled: boolean;
  onToogle: () => void;
}

function Switch({ rounded, onToogle, isToggled, ...rest }:SwitchProps) {
  return(
    <label className={styles.container}>
      <input type="checkbox" checked={isToggled} onChange={onToogle}  {...rest}/> 
      <span className={`${styles.slider} ${rounded ? styles.rounded : ''}`} />
    </label>
  );
}

export { Switch };
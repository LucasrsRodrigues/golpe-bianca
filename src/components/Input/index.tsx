import { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

function Input({ name, label }:InputProps) {
  return (
    <div className={styles.container}>
      <label>
        <input
          autoComplete="off"
          name={name}
          type="text"
          placeholder=" "
        />
        <p>{label}</p>
      </label>
    </div>
  );
}

export { Input };
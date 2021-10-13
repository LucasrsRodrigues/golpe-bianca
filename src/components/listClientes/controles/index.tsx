import { FiEdit2 } from 'react-icons/fi';
import { Input } from '../../Input';
import styles from './styles.module.scss';

function Controles() {
  return (
    <div className={styles.sectionForm}>
      <div className={styles.sectionTitle}>
        <h1>.:Controles:.</h1>

        <button>
          <FiEdit2 />
          <p>Editar</p>
        </button>
      </div>
      <div className={styles.wrapperData}>
        <div className={styles.data}>
          <table>
            <tr>
              <th>Código Investidor</th>
              <th>Referência</th>
              <th>Valor</th>
            </tr>
            <tr>
              <td>26336</td>
              <td>Principal</td>
              <td>R$ 3609.71</td>
            </tr>
            <tr>
              <td>26760</td>
              <td>Casa</td>
              <td>R$ 2074.16</td>
            </tr>
            <tr>
              <td>TOTAL</td>
              <td></td>
              <td>R$ 5683.87</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}


export { Controles };
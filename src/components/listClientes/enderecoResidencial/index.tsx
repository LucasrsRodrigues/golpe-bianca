import { FiEdit2 } from 'react-icons/fi';
import styles from './styles.module.scss';

interface EnderecoResidencialProps {
  endereco_residencial: {
    endereco: string;
    numero: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    complemento: string;
    telefone_celular: string;
    telefone_fixo: string;
  },
}

function EnderecoResidencial({ endereco_residencial }: EnderecoResidencialProps) {
  return (
    <div className={styles.wrapperCards}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>
          Endereço Residencial e Contato
        </h3>
        <button className={styles.editButton}>
          <FiEdit2 />
          <span>Editar</span>
        </button>
      </div>
      <div className={styles.cardBody}>
        <form>
          <div className={styles.cardRow}>
            <div className={styles.formGroup}>
              <label>
                Endereço
              </label>
              <input type="text" value={endereco_residencial.endereco} disabled />
            </div>

            <div className={styles.formGroup}>
              <label>
                Numero
              </label>
              <input type="text" value={endereco_residencial.numero} disabled />
            </div>

            <div className={styles.formGroup}>
              <label>
                Bairro
              </label>
              <input type="text" value={endereco_residencial.bairro} disabled />
            </div>

            <div className={styles.formGroup}>
              <label>
                CEP
              </label>
              <input type="text" value={endereco_residencial.cep} disabled />
            </div>

            <div className={styles.formGroup}>
              <label>
                Estado
              </label>

              <input type="text" value={endereco_residencial.estado} disabled />
            </div>

            <div className={styles.formGroup}>
              <label>
                Complemento
              </label>

              <input type="text" value={endereco_residencial.complemento} disabled />
            </div>

            <div className={styles.formGroup}>
              <label>
                Telefone Celular
              </label>
              <input type="text" value={endereco_residencial.telefone_celular} disabled />
            </div>

            <div className={styles.formGroup}>
              <label>
                Telefone Fixo
              </label>
              <input type="text" value={endereco_residencial.telefone_fixo} disabled />
            </div>
          </div>

          <button className={styles.buttonEdit}>
            Atualizar Dados
          </button>
        </form>
      </div>
    </div>
  );
}

export { EnderecoResidencial };
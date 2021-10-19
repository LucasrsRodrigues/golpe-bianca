import { FiEdit2 } from 'react-icons/fi';
import styles from './styles.module.scss';

interface SituacaoCadastralProps {
  situacao_cadastral: {
    resgate_automatico: string;
    valor_resgate_automatico: string;
    porcentagem_rentabilidade: string;
    tipo_do_contrato: string;
    enviar_email: string;
    situacao_do_cliente: string;
  }
}

function SituacaoCadastral({ situacao_cadastral }:SituacaoCadastralProps) {
  return (
    <div className={styles.wrapperCards}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            Situação cadastral
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
                  % Resgate Automático
                </label>
                <input type="text" value={situacao_cadastral.resgate_automatico} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Valor Resgate Automático
                </label>
                <input type="text" value={situacao_cadastral.valor_resgate_automatico} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  % de Rentabilidade
                </label>
                <input type="text" value={situacao_cadastral.porcentagem_rentabilidade} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Tipo do Contrato
                </label>
                <input type="text" value={situacao_cadastral.tipo_do_contrato} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Enviar E-mail
                </label>

                <input type="text" value={situacao_cadastral.enviar_email} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Situação do Cliente
                </label>

                <input type="text" value={situacao_cadastral.situacao_do_cliente} disabled />
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

export { SituacaoCadastral };
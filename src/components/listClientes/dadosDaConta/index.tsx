import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { Switch } from '../../Switch';
import styles from './styles.module.scss';

interface DadosDaContaProps {
  dados_da_conta: {
    agencia:string;
    conta:string;
    digito:string;
    status: boolean;
    limite_pix:string;
    limite_ted:string;
    limite_p2p:string;
    saldo:string;
  }
}

function DadosDaConta({ dados_da_conta }:DadosDaContaProps) {
  const [isActiveAccount, setIsActiveAccount] = useState(dados_da_conta.status);

  return (
    <div className={styles.wrapperCards}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            Dados da conta
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
                  <strong>Agência:</strong> {dados_da_conta.agencia}
                </label>
                <br />
                <label>
                  <strong>Conta:</strong> {dados_da_conta.conta}
                </label>
                <br />
                <label>
                  <strong>Digito:</strong> {dados_da_conta.digito}
                </label>
              </div>
              <div className={styles.formGroup}>
                <label>
                  <strong>Status da conta:</strong> {isActiveAccount ? 'Ativa' : 'Inativa'}
                </label>
                <br />
                <Switch isToggled={isActiveAccount} onToogle={() => setIsActiveAccount(!isActiveAccount)} rounded disabled />
              </div>
              {/* Limite Pix */}
              <div className={styles.formGroup}>
                <label>
                  Limite Pix
                </label>
                <input type="text" value={dados_da_conta.limite_pix} disabled />
              </div>
              {/* Limite TED */}
              <div className={styles.formGroup}>
                <label>
                  Limite TED
                </label>
                <input type="text" value={dados_da_conta.limite_ted} disabled />
              </div>
              {/* Limite P2P */}
              <div className={styles.formGroup}>
                <label>
                  Limite P2P
                </label>
                <input type="text" value={dados_da_conta.limite_p2p} disabled />
              </div>
              {/* Saldo */}
              <div className={styles.formGroup}>
                <label>
                  Saldo
                </label>
                <input type="text" value={dados_da_conta.saldo} disabled />
              </div>
              {/* Link -> Extrato */}
              <div className={styles.formGroup}>
                {/* <label>
                  Agência
                </label>
                <input type="text" value={endereco_residencial.endereco} disabled /> */}
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

export { DadosDaConta };
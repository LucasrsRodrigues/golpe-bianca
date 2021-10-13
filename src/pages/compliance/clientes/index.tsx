import { GlobalWrapper } from "../../../components/GlobalWrapper";

import styles from '../../../styles/pages/complice/ListClientes.module.scss';

export default function Clientes() {
  return (
    <GlobalWrapper>
      <section className={styles.clienteContainer}>
        <h1>Clientes</h1>
        
        <div className={styles.wrapperTable}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Data cadastro</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#">
                    1022
                  </a>
                </td>
                <td>Lucas Rodrigues</td>
                <td>29/09/2021</td>
                <td>
                  <p className={`${styles.status} ${styles.disapproved}`}>
                    compliance
                  </p>
                  <p className={`${styles.status} ${styles.approved}`}>
                    jurídico
                  </p>
                  <p className={`${styles.status} ${styles.pending}`}>
                    diretoria
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </GlobalWrapper>
  );
}
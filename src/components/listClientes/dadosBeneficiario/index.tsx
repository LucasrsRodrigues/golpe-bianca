import { FiEdit2 } from 'react-icons/fi';
import { Input } from '../../Input';

import styles from './styles.module.scss';

function DadosBeneficiario() {
  return (
    <div className={styles.sectionForm}>
      <div className={styles.sectionTitle}>
        <h1>.:DADOS BENEFICIÁRIO:.</h1>

        <button>
          <FiEdit2 />
          <p>Editar</p>
        </button>
      </div>
      <div className={styles.wrapperData}>
        <div className={styles.data}>          
          <Input name="nome" label="Nome"/>
          <Input name="cpf" label="CPF" />
          <Input name="data de nascimento" label="DATA DE NASCIMENTO" />
          <Input name="controle_principal" label="Controle Principal" />
          <Input name="referencia_controle" label="Nome/Referência do Controle" />
          <Input name="informacoes_seguranca" label="Informaçoes de segurança" />
          <Input name="name" label="Nome" />
          <Input name="data_nascimento" label="Data de Nascimento" />
          <Input name="nome_mae" label="Nome da Mãe" />
          <Input name="rg" label="RG" />
          <Input name="data_emissao" label="Data de Emissao" />
          <Input name="cpf" label="CPF" />
          <Input name="orgao_emissor" label="Orgão Emissor" />
          <Input name="email_principal" label="E-Mail Pricipal" />
          <Input name="email_alternativo" label="E-Mail Alternativo" />
          <Input name="obs_interna" label="OBS Interna" />
        </div>
      </div>
    </div>
  );
}


export { DadosBeneficiario };
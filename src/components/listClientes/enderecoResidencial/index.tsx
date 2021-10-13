import { AiOutlinePlus } from 'react-icons/ai';
import { FiEdit2, FiPlus } from 'react-icons/fi';
import { Input } from '../../Input';
import styles from './styles.module.scss';

function EnderecoResidencial() {
  return (
    <div className={styles.sectionForm}>
      <div className={styles.sectionTitle}>
        <h1>.:ENDEREÇO RESIDENCIAL 26336:.</h1>

        <button>
          <FiEdit2 />
          <p>Editar</p>
        </button>
      </div>
      <div className={styles.wrapperData}>
        <div className={styles.data}>
          <Input name="controle_principal" label="Controle Principal" />
          <Input name="endereco" label="Endereço" />
          <Input name="numero" label="Numero" />
          <Input name="bairro" label="Bairro" />
          <Input name="cep" label="CEP" />
          <Input name="cidade" label="Cidade" />
          <Input name="estado" label="Estado" />
          <Input name="complemento" label="Complemento" />
        </div>
      </div>

      <div className={`${styles.sectionTitle} ${styles.mup}`}>
        <h1>.:TELEFONES CADASTRADOS:.</h1>

        <button>
          <FiPlus />
          <p>Adicionar</p>
        </button>
      </div>

      <div className={styles.wrapperData}>
        <div className={styles.data}>
          <Input name="telefone_celular" label="Telefone Celular" />

        </div>
      </div>
    </div>
  );
}

export { EnderecoResidencial };
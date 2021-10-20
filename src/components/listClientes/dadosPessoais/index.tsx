import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEdit2, FiX } from 'react-icons/fi';
import * as yup from 'yup';

import styles from './styles.module.scss';

interface DadosPessoaisProps {
  dados_pessoais: {
    data_cadastro: string;
    numero_do_controle: string;
    uuid: string;
    controle_principal: string;
    referencia_controle: string;
    informacoes_seguranca: {
      pep: string,
      usPerson: string,
      criticidade: null
    },
    nome: string;
    data_nascimento: string;
    nacionalidade: string;
    nome_mae: string;
    rg: string;
    data_emissao: string;
    cpf: string;
    orgao_emissor: string;
    email_principal: string;
    email_alternativo: string;
    obs_interna: string;
  }
}

const schemaValidate = yup.object().shape({});

function DadosPessoais({ dados_pessoais }: DadosPessoaisProps) {
  const [isEditable, setIsEditable] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(schemaValidate),
    defaultValues: dados_pessoais
  });

  function handleSubmitDadosPessoais() {

  }

  return (
    <div className={styles.wrapperCards}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>
          Dados Pessoais
        </h3>

        <button className={`${isEditable ? styles.editButton : styles.cancelEdit}`} onClick={() => setIsEditable(!isEditable)}>
          {isEditable ? (
            <>
              <FiEdit2 />
              <span>Editar</span>
            </>
          ) : (
            <>
              <FiX />
              <span>Cancelar</span>
            </>
          )}

        </button>
      </div>
      <div className={styles.cardBody}>
        <form onSubmit={handleSubmit(handleSubmitDadosPessoais)} >
          <div className={styles.cardRow}>

            <div className={styles.formGroup}>
              <label>
                Data de Cadastro
              </label>
              <input
                name="data_cadastro"
                type="text"
                disabled
                {...register('data_cadastro')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                UUID
              </label>
              <input
                name="uuid"
                type="text"
                disabled
                {...register('uuid')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Nome/Referência do Controle
              </label>

              <input
                name="referencia_controle"
                type="text"
                disabled={isEditable}
                {...register('referencia_controle')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Informações de segurança
              </label>

              <div className={styles.wrapperOptions}>
                <div className={styles.option}>
                  <strong>Pep:</strong>
                  {dados_pessoais.informacoes_seguranca.pep}
                </div>
                <div className={styles.option}>
                  <strong>US Person:</strong>
                  {dados_pessoais.informacoes_seguranca.usPerson}
                </div>
                <div className={styles.option}>
                  <strong>Criticidade:</strong>
                  {dados_pessoais.informacoes_seguranca.criticidade === null ? '---' : dados_pessoais.informacoes_seguranca.criticidade}
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>
                Nome
              </label>

              <input
                name="nome"
                type="text"
                disabled={isEditable}
                {...register('nome')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Data de Nascimento
              </label>

              <input
                name="data_nascimento"
                type="text"
                disabled={isEditable}
                {...register('data_nascimento')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Nacionalidade
              </label>

              <input
                name="nacionalidade"
                type="text"
                disabled={isEditable}
                {...register('nacionalidade')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Nome da Mãe
              </label>

              <input
                name="nome_mae"
                type="text"
                disabled={isEditable}
                {...register('nome_mae')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                RG
              </label>

              <input
                name="rg"
                type="text"
                disabled={isEditable}
                {...register('rg')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Data de Emissao
              </label>

              <input
                name="data_emissao"
                type="text"
                disabled={isEditable}
                {...register('data_emissao')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                CPF
              </label>

              <input
                name="cpf"
                type="text"
                disabled
                {...register('cpf')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Orgão Emissor
              </label>

              <input
                name="orgao_emissor"
                type="text"
                disabled={isEditable}
                {...register('orgao_emissor')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                E-Mail Pricipal
              </label>

              <input
                name="email_principal"
                type="text"
                disabled={isEditable}
                {...register('email_principal')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                E-Mail Alternativo
              </label>

              <input
                name="email_alternativo"
                type="text"
                disabled={isEditable}
                {...register('email_alternativo')}
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                OBS Interna
              </label>

              <input
                name="obs_interna"
                type="text"
                disabled={isEditable}
                {...register('obs_interna')}
              />
            </div>
          </div>

          <button className={styles.buttonEdit} disabled={isEditable}>
            Atualizar Dados
          </button>
        </form>
      </div>
    </div>
  );
}

export { DadosPessoais };
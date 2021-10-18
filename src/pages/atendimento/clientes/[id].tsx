import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { GlobalWrapper } from "../../../components/GlobalWrapper";


import styles from '../../../styles/pages/atendimento/Listuser.module.scss';
import { users } from "../../../utils/data";

interface ClienteProps {
  data_cadastro: string;
  numero_do_controle: string;
  uuid: string;
  controle_principal: string;
  referencia_controle: string;
  informacoes_seguranca: {
    pep: string;
    usPerson: string;
    criticidade: string;
  };
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
const cliente = {
  dados_pessoais: {
    data_cadastro: '15/08/2021',
    numero_do_controle: '26760',
    uuid: 'd6d91ac5e1f269d42ba6daefb2ee8d60',
    controle_principal: '26336',
    referencia_controle: 'Casa',
    informacoes_seguranca: {
      pep: 'Não',
      usPerson: 'Não',
      criticidade: null
    },
    nome: 'Lucas Rodrigues Santos',
    data_nascimento: '20/06/2000',
    nacionalidade: 'Brasil',
    nome_mae: 'Mirella Rafaela Dias',
    rg: '41.414.265-2',
    data_emissao: '01/07/2021',
    cpf: '219.064.568-95',
    orgao_emissor: 'SSP-SP',
    email_principal: 'lucas.rogerio@email.com',
    email_alternativo: '',
    obs_interna: null,
  },
  endereco_residencial: {
    endereco: 'Rua das Moreias',
    numero: '433',
    bairro: 'Jurerê',
    cep: '88053-535',
    cidade: 'Florianópolis',
    estado: 'SC',
    complemento: 'BLOCO A',
    telefone_celular: '(48) 98315-5449',
    telefone_fixo: '(48) 2761-1626'
  },
  situacao_cadastral : {
    resgate_automatico: '0',
    valor_resgate_automatico: '0.00',
    porcentagem_rentabilidade: '4.00',
    tipo_do_contrato: '5',
    enviar_email: 's',
    situacao_do_cliente: 'ativo'
  }

};


export default function ListCliente() {

  const { query } = useRouter();

  const id = query.id;

  return (
    <GlobalWrapper>
      <div className={styles.pageHeader}>
        <div>
          <h1>Dados Usuário</h1>
        </div>
      </div>

      {/* Dados Pessoais */}
      <div className={styles.wrapperCards}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            Dados Pessoais
          </h3>
        </div>
        <div className={styles.cardBody}>
          <form>
            <div className={styles.cardRow}>

              <div className={styles.formGroup}>
                <label>
                  Data de Cadastro
                </label>
                <input type="text" value={cliente.dados_pessoais.data_cadastro} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  UUID
                </label>
                <input type="text" value={cliente.dados_pessoais.uuid} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Controle Principal
                </label>
                <input type="text" value={cliente.dados_pessoais.controle_principal} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Nome/Referência do Controle
                </label>
                <input type="text" value={cliente.dados_pessoais.referencia_controle} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Informações de segurança
                </label>

                <div className={styles.wrapperOptions}>
                  <div className={styles.option}>
                    <strong>Pep:</strong>
                    {cliente.dados_pessoais.informacoes_seguranca.pep}
                  </div>
                  <div className={styles.option}>
                    <strong>US Person:</strong>
                    {cliente.dados_pessoais.informacoes_seguranca.usPerson}
                  </div>
                  <div className={styles.option}>
                    <strong>Criticidade:</strong>
                    {cliente.dados_pessoais.informacoes_seguranca.criticidade}
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>
                  Nome
                </label>

                <input type="text" value={cliente.dados_pessoais.nome} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Data de Nascimento
                </label>

                <input type="text" value={cliente.dados_pessoais.data_nascimento} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Nacionalidade
                </label>

                <input type="text" value={cliente.dados_pessoais.nacionalidade} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Nome da Mãe
                </label>

                <input type="text" value={cliente.dados_pessoais.nome_mae} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  RG
                </label>

                <input type="text" value={cliente.dados_pessoais.rg} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Data de Emissao
                </label>

                <input type="text" value={cliente.dados_pessoais.data_emissao} disabled/>
              </div>

              <div className={styles.formGroup}>
                <label>
                  CPF
                </label>

                <input type="text" value={cliente.dados_pessoais.cpf} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Orgão Emissor
                </label>

                <input type="text" value={cliente.dados_pessoais.orgao_emissor} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  E-Mail Pricipal
                </label>

                <input type="text" value={cliente.dados_pessoais.email_principal} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  E-Mail Alternativo
                </label>

                <input type="text" value={cliente.dados_pessoais.email_alternativo} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  OBS Interna
                </label>

                <input type="text" value={cliente.dados_pessoais.obs_interna} disabled />
              </div>
            </div>

            <button className={styles.buttonEdit}>
              Atualizar Dados
            </button>
          </form>
        </div>
      </div>

      {/* Endereco Residencial */}
      <div className={styles.wrapperCards}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            Endereço Residencial e Contato
          </h3>
        </div>
        <div className={styles.cardBody}>
          <form>
            <div className={styles.cardRow}>
              <div className={styles.formGroup}>
                <label>
                  Endereço
                </label>
                <input type="text" value={cliente.endereco_residencial.endereco} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Numero
                </label>
                <input type="text" value={cliente.endereco_residencial.numero} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Bairro
                </label>
                <input type="text" value={cliente.endereco_residencial.bairro} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  CEP
                </label>
                <input type="text" value={cliente.endereco_residencial.cep} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Estado
                </label>

                <input type="text" value={cliente.endereco_residencial.estado} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Complemento
                </label>

                <input type="text" value={cliente.endereco_residencial.complemento} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Telefone Celular
                </label>
                <input type="text" value={cliente.endereco_residencial.telefone_celular} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Telefone Fixo
                </label>
                <input type="text" value={cliente.endereco_residencial.telefone_fixo} disabled />
              </div>
            </div>

            <button className={styles.buttonEdit}>
              Atualizar Dados
            </button>
          </form>
        </div>
      </div>

      {/* Dados da conta */}
      <div className={styles.wrapperCards}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            Dados da conta
          </h3>
        </div>
        
        <div className={styles.cardBody}>
          <form>
            <div className={styles.cardRow}>
              <div className={styles.formGroup}>
                <label>
                  {/* Agencia ==> disabled */}
                  {/* Conta ==> disabled */}
                  {/* Digito ==> disabled */}
                  {/* Limite Pix */}
                  {/* Limite TED */}
                  {/* Limite P2P */}
                  {/* Saldo */}
                  {/* Link -> Extrato */}
                  {/* Toggle Button Status Ativo | Inativo */}
                </label>
                <input type="text" value={cliente.endereco_residencial.endereco} disabled />
              </div>
            </div>

            <button className={styles.buttonEdit}>
              Atualizar Dados
            </button>
          </form>
        </div>
      </div>
      {/* Situacao Cadastral */}
      <div className={styles.wrapperCards}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>
            Situação cadastral
          </h3>
        </div>
        
        <div className={styles.cardBody}>
          <form>
            <div className={styles.cardRow}>
              <div className={styles.formGroup}>
                <label>
                  % Resgate Automático
                </label>
                <input type="text" value={cliente.endereco_residencial.endereco} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Valor Resgate Automático
                </label>
                <input type="text" value={cliente.endereco_residencial.numero} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  % de Rentabilidade
                </label>
                <input type="text" value={cliente.endereco_residencial.bairro} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Tipo do Contrato
                </label>
                <input type="text" value={cliente.endereco_residencial.cep} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Enviar E-mail
                </label>

                <input type="text" value={cliente.endereco_residencial.estado} disabled />
              </div>

              <div className={styles.formGroup}>
                <label>
                  Situação do Cliente
                </label>

                <input type="text" value={cliente.endereco_residencial.complemento} disabled />
              </div>
            </div>

            <button className={styles.buttonEdit}>
              Atualizar Dados
            </button>
          </form>
        </div>
      </div>
    </GlobalWrapper>
  );
}

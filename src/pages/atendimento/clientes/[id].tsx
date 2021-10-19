import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { GlobalWrapper } from "../../../components/GlobalWrapper";
import { DadosDaConta } from "../../../components/listClientes/dadosDaConta";
import { DadosPessoais } from "../../../components/listClientes/dadosPessoais";
import { EnderecoResidencial } from "../../../components/listClientes/enderecoResidencial";
import { SituacaoCadastral } from "../../../components/listClientes/situacaoCadastral";
import { Switch } from "../../../components/Switch";

import styles from '../../../styles/pages/atendimento/Listuser.module.scss';

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
  situacao_cadastral: {
    resgate_automatico: '0',
    valor_resgate_automatico: '0.00',
    porcentagem_rentabilidade: '4.00',
    tipo_do_contrato: '5',
    enviar_email: 's',
    situacao_do_cliente: 'ativo'
  },
  dados_da_conta: {
    agencia: '0001',
    conta: '4695501',
    digito: '1',
    status: true,
    limite_pix: 'R$ 15000',
    limite_ted: 'R$ 30000',
    limite_p2p: 'R$ 90000',
    saldo: 'R$ 1430'
  },
  

};


export default function ListCliente() {

  const { query } = useRouter();

  return (
    <GlobalWrapper>
      <div className={styles.pageHeader}>
        <div>
          <h1>Dados Usuário</h1>
        </div>
      </div>

      {/* Dados Pessoais */}
      <DadosPessoais dados_pessoais={cliente.dados_pessoais} />

      {/* Endereco Residencial */}
      <EnderecoResidencial endereco_residencial={cliente.endereco_residencial} />

      {/* Dados da conta */}
      <DadosDaConta  dados_da_conta={cliente.dados_da_conta} />

      {/* Situacao Cadastral */}
      <SituacaoCadastral situacao_cadastral={cliente.situacao_cadastral} />
    </GlobalWrapper>
  );
}

import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";  
import { GlobalWrapper } from "../../../components/GlobalWrapper";
import { users } from "../../../utils/data";

import { DadosPessoais } from "../../../components/listClientes/dadosPessoais";
import { Controles } from "../../../components/listClientes/controles";

import styles from '../../../styles/pages/atendimento/Listuser.module.scss';
import { EnderecoResidencial } from "../../../components/listClientes/enderecoResidencial";
import { DadosBeneficiario } from "../../../components/listClientes/dadosBeneficiario";

export default function ListCliente() {
  const { query } = useRouter();

  const id = query.id;

  useEffect(() => {
    const cliente = users[Number(id) - 1];
  }, [id]);

  return (
    <GlobalWrapper>
      <section className={styles.container}>
        <DadosPessoais />
        
        <Controles />
        
        <EnderecoResidencial />

        <DadosBeneficiario />
      </section>
    </GlobalWrapper>
  );
}
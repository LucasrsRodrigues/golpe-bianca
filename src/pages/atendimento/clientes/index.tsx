import { GetServerSideProps } from "next";
import { BiSearch } from "react-icons/bi";
import { AutoCompleteInput } from "../../../components/AutoComplete";
import { GlobalWrapper } from "../../../components/GlobalWrapper";

import styles from '../../../styles/pages/complice/ListClientes.module.scss';
import { users } from "../../../utils/data";

export default function Clientes({ suggestions }) {
  return (
    <GlobalWrapper>
      <section className={styles.clienteContainer}>
        <h1>Clientes</h1>

        <form action="/">
          <AutoCompleteInput 
            suggestions={suggestions}
          />
        </form>
      </section>
    </GlobalWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {

  const suggestions = [
    {
      id: '1',
      nome: "Andrea Yasmin Mariane da Mota",
      cpf: "599.000.143-67",
    },
    {
      id: '2',
      nome: "Milena Elisa Simone Costa",
      cpf: "892.701.251-81",
    },
    {
      id: '3',
      nome: "Sophie Agatha Castro",
      cpf: "924.175.394-38",
    },
    {
      id: '4',
      nome: "Andreia Regina Souza",
      cpf: "143.047.478-51",
    },
    {
      id: '5',
      nome: "Caroline Bianca Nina Caldeira",
      cpf: "468.862.071-30",
    },
    {
      id: '6',
      nome: "Daniela Nina Assunção",
      cpf: "184.676.245-66",
    },
    {
      id: '7',
      nome: "Enrico Osvaldo Geraldo Viana",
      cpf: "020.500.207-24",
    },
    {
      id: '8',
      nome: "Theo Manoel da Cunha",
      cpf: "917.317.553-68",
    },
    {
      id: '9',
      nome: "Breno Oliver Porto",
      cpf: "632.360.012-91",
    },
    {
      id: '10',
      nome: "Cauã Juan da Mota",
      cpf: "132.609.439-43",
    },
  ];

  return {
    props: {
      suggestions
    }
  }
}
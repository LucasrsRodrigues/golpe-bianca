import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

interface IUsersProps{
  id: string;
  nome: string;
  cpf: string;
}

interface AutoCompleteProps {
  suggestions: IUsersProps[];
}

import styles from './styles.module.scss';

function AutoCompleteInput({ suggestions }: AutoCompleteProps) {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const { push } = useRouter();

  const onChange = (e) => {
    const userInput = e.target.value;
    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.nome.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (id: string) => {
    push(`clientes/${id}`);
    
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className={styles.suggestions}>
        {filteredSuggestions.map((suggestion, index) => {
          let className: string;
          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestionActive";
          }

          return (
            <li className={className} key={suggestion.id} onClick={() => onClick(suggestion.id)}>
              <strong>
                #{suggestion.id}
              </strong>
              <p>
                {suggestion.nome}
              </p>
              <p className={styles.userCpf}>
                {suggestion.cpf}
              </p>
            </li>
          );
        })}
      </ul>
    ) : (
      <div className={styles.noSuggestions}>
        <em>Sem sugestões, você está por sua conta!</em>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <label className={styles.inputWrapper}>
        <BiSearch size={30} />
        <input
          type="text"
          placeholder="Digite o nome do cliente..."
          onChange={onChange}
          value={input}
          className={styles.input}
        />
      </label>
      {showSuggestions && input && <SuggestionsListComponent />}
    </div>

  )
}



export { AutoCompleteInput };
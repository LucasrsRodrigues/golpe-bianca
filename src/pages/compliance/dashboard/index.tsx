import { useState } from 'react';
import { GlobalWrapper } from '../../../components/GlobalWrapper';


export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(true);

  function changeState() {
    setMenuOpen(!menuOpen);
  }

  return (
    <GlobalWrapper>
      <h1>Dashboard Compliance</h1>
    </GlobalWrapper>
  );
}
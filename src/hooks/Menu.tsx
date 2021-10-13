import { createContext, useContext, useState } from "react";

interface MenuContextData {
  isOpenMenu: boolean;
  changeVisibilty: () => void;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

function MenuProvider({ children }){
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  function changeVisibilty(){
    setIsOpenMenu(!isOpenMenu);
  }

  return(
    <MenuContext.Provider value={{ isOpenMenu, changeVisibilty }}>
      { children }
    </MenuContext.Provider>
  )
}

function useMenu(){
  const context = useContext(MenuContext);
  
  if (!context) {
    throw new Error('useMenu must be used within a useProvider');
  }

  return context;
}

export { MenuProvider, useMenu };
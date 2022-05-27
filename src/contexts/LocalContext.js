import { createContext, useState } from "react";
import { LOCALES } from "../i18n/locales";

const LocalContext = createContext(true);

const LocalProvider = ({ children }) => {
  const [local, setLocal] = useState(LOCALES.SPANISH);

  const changeLocal = () => {
    if(local === LOCALES.SPANISH){
      setLocal(LOCALES.ENGLISH);
    }
    else{
      setLocal(LOCALES.SPANISH);
    }
  };
  return (
    <LocalContext.Provider value={{ local, changeLocal }}>
      {children}
    </LocalContext.Provider>
  );
};

export { LocalContext, LocalProvider };

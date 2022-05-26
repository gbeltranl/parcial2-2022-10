import { createContext, useState } from 'react';
import { LOCALES } from '../i18n/locales';

const LocaleContext = createContext(true);

const LocaleProvider = ({ children }) => {

    const [locale, setLocale] = useState(LOCALES.SPANISH); 

    
    const changeLocale = () => {
        
        if(locale === LOCALES.SPANISH){
            setLocale(LOCALES.ENGLISH);
        }
        else{
            setLocale(LOCALES.SPANISH);
        }
    } ;
    return (
        <LocaleContext.Provider value = {{locale, changeLocale}}>
            {children}
        </LocaleContext.Provider>
    );
};

export { LocaleContext, LocaleProvider };
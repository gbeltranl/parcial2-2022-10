import { LOCALES } from './i18n/locales';
import React, { useContext, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import messages from './i18n/messages';
import { NavBar } from './shared/components/NavBar';
import { PokemonList } from './pages/pokemon-list/PokemonList';
import { Report } from './pages/Report';
import './App.scss';
import { LocaleContext } from './context/LocaleContext';

function App() {
  let { localeNew, changeLocale } = useContext(LocaleContext);
  console.log(localeNew);
  /* useEffect(()=> {
    setLanguage(navigator.language);
  },[navigator.language]); */
  return (
    <>
      <IntlProvider locale={LOCALES.SPANISH} messages={messages[LOCALES.SPANISH]}>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={<PokemonList></PokemonList>} />
            <Route exact path='/report' element={<Report></Report>} />
            <Route
              path='*'
              element={
                <main style={{ padding: '1rem' }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </IntlProvider>
    </>
  );
}

export default App;

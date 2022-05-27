import React, { useContext, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import messages from "./i18n/messages";
import { NavBar } from "./shared/components/NavBar";
import { PokemonList } from "./pages/pokemon-list/PokemonList";
import "./App.scss";
import Bar from "./charts/bar-chart";
import { LocalContext } from "./contexts/LocalContext";

function App() {
  
  const { local, changeLocale } = useContext(LocalContext);
  return (
    <>
      <IntlProvider locale={local} messages={messages[local]}>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route exact path="/" element={<PokemonList></PokemonList>} />
            <Route exact path="/report" element={<Bar></Bar>} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
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

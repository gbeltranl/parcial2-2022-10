import React, { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { LocalContext } from "../../contexts/LocalContext";
import { LOCALES } from "../../i18n/locales";
import "./PokemonList.scss";

export const PokemonList = () => {
  const { local, changeLocale } = useContext(LocalContext);
  const [pokemons, setPokemons] = useState(null);
  useEffect(() => {
    if (!navigator.onLine) {
      console.log("Offline");
      if (localStorage.getItem("pokemons") === null) {
        setPokemons({});
      } else {
        let pokemonsInStorage = JSON.parse(localStorage.getItem("pokemons"));
        setPokemons(pokemonsInStorage);
      }
    } else {
      if (local === LOCALES.SPANISH) {
        console.log("Espanol");
        fetch(
          "https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/f8357c439bbb7b4bd3dc6e8807c52105fb137ec6/pokemon-es.json"
        )
          .then((res) => res.json())
          .then((res) => {
            setPokemons(res);
            localStorage.setItem("pokemons", JSON.stringify(res));
          });
      } else {
        console.log("Ingles");
        fetch(
          "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json"
        )
          .then((res) => res.json())
          .then((res) => {
            setPokemons(res);
            localStorage.setItem("pokemons", JSON.stringify(res));
          });
      }
    }
  }, [local]);
  return (
    <>
      <div className="pokemon-container">
        <h1><FormattedMessage id="title"/></h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">
                <FormattedMessage id="Image" />
              </th>
              <th scope="col">
                <FormattedMessage id="Name" />
              </th>
              <th scope="col">
                <FormattedMessage id="Description" />
              </th>
              <th scope="col">
                <FormattedMessage id="Height" />
              </th>
              <th scope="col">
                <FormattedMessage id="Weight" />
              </th>
              <th scope="col">
                <FormattedMessage id="Type" />
              </th>
            </tr>
          </thead>
          <tbody>
            {pokemons &&
              pokemons.map((p, i) => (
                <tr>
                  <th scope="row">{i}</th>
                  <td><img className="img" src={p.ThumbnailImage} alt={p.ThumbnailAltTex} referrerPolicy="no-referrer"/></td>
                  <td>{p.name}</td>
                  <td>{p.description}</td>
                  <td>{p.height}</td>
                  <td>{p.weight}</td>
                  <td>{p.type.map((t,i) => (
                      <span className="badge bg-secondary">{t}</span>
                    ))}
                    </td>
                </tr>
              ))}
          </tbody>
        </table>
        
      </div>
    </>
  );
};

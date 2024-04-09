import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm/useForm";
import { HeroCard } from "../components";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
  // useNavigate para redirigir a una nueva ruta
  const navigate = useNavigate();

  // useLocation para obtener la informacion de la url
  const location = useLocation();

  // queryString.parse para parsear la query string en un objeto
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    // el valor del input por defecto
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className={`alert alert-primary animate__animated animate__fadeIn 
            ${ showSearch ? "" : "d-none" }`}
          >
            Search a Hero
          </div>
          <div
            className={`alert alert-danger showSearch animate__animated animate__fadeIn 
            ${showError ? "" : "d-none"}`}
          >
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </>
  );
};

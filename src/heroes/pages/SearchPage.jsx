import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm/useForm";
import { HeroCard } from "../components";

export const SearchPage = () => {
  // uso useNavigate para redirigir a una nueva ruta
  const navigate = useNavigate();

  // uso useLocation para obtener la informacion de la url
  const location = useLocation();

  // uso queryString.parse para parsear la query string en un objeto
  const {q = ''} = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) {
      return;
    }

    navigate(`?q=${searchText}`);
  }

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

          <div className="alert alert-primary">
            Search a Hero
          </div>

          <div className="alert alert-danger">
            No hero with <b>{q}</b>
          </div>

          {/* <HeroCard {...hero}/> */}
        </div>
      </div>
    </>
  );
};

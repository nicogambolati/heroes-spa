import { Link } from "react-router-dom";

const CharactersByHero = ({ alter_ego, characters }) => {
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 animate__animated animate__fadeIn">
      <div className="card h-100 d-flex flex-column">
        <img
          src={`./assets/heroes/${id}.jpg`}
          className="card-img-top"
          alt={superhero}
        />
        <div className="card-body d-flex flex-column d-flex justify-content-between">
          <div>
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            <CharactersByHero alter_ego={alter_ego} characters={characters} />
          </div>
          <div>
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`} className="btn btn-primary mt-auto">
              More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

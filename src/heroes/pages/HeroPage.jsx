import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  // uso el useMemo para no volver a llamar a getHeroById si el id no cambia
  const hero = useMemo(() => getHeroById(id), [id]);
  const  navigate = useNavigate();

  const onNavigateBack = () => {
    // window.history.back();
    navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-5">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-primary" onClick={onNavigateBack}>Back</button>
      </div>
    </div>
  );
};

import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  // uso el useMemo para no volver a llamar a getHeroesByPublisher si el publisher no cambia
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {heroes.map(hero => {
        // Destructuro el objeto hero
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};

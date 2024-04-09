import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {heroes.map(hero => {
        // Destructuro el objeto hero
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};

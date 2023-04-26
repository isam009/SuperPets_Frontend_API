import { useMemo } from "react";
/* import { HeroCard } from "./"; */
import { getProductsByPublisher } from "../helpers";

export const ProductList = ({ publisher }) => {
  const products = useMemo(() => getProductsByPublisher(publisher), [publisher]);

  return (
    <ul>
        {
            products.map(item => (
                <li key={item.id}>
                    {item.superhero}
                </li>
            ))
        }
    </ul>
   /*  <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div> */
  );
};

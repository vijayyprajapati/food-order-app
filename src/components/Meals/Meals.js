import { Fragment } from "react/cjs/react.production.min";
import AvailbleMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailbleMeals />
    </Fragment>
  );
};

export default Meals;

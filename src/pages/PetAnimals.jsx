import LessonNavigator from "../components/LessonNavigator";
import petAnimals from "../data/petAnimals";

function PetAnimals() {
  return <LessonNavigator title="Pet Animals" description="Meet friendly animals that live with people." items={petAnimals} accent="orange" />;
}

export default PetAnimals;

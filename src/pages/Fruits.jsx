import LessonNavigator from "../components/LessonNavigator";
import fruits from "../data/fruits";

function Fruits() {
  return <LessonNavigator title="Fruits" description="Learn the names of everyday fruits." items={fruits} accent="pink" />;
}

export default Fruits;

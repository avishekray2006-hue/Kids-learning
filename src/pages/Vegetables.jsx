import LessonNavigator from "../components/LessonNavigator";
import vegetables from "../data/vegetabales";

function Vegetables() {
  return <LessonNavigator title="Vegetables" description="Explore healthy vegetables, one at a time." items={vegetables} accent="green" />;
}

export default Vegetables;

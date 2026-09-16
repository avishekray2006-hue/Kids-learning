import LessonNavigator from "../components/LessonNavigator";
import seasons from "../data/seasons";

function Seasons() {
  return <LessonNavigator title="Seasons" description="Learn how the weather changes through the year." items={seasons} accent="green" />;
}

export default Seasons;

import LessonNavigator from "../components/LessonNavigator";
import colours from "../data/colors";

function Colours() {
  return <LessonNavigator title="Colours" description="Recognize and name bright everyday colours." items={colours} accent="violet" />;
}

export default Colours;

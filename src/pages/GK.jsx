import LessonNavigator from "../components/LessonNavigator";
import gk from "../data/gk";

function GK() {
  const items = gk.map((item) => ({
    id: item.id,
    emoji: item.emoji,
    name: item.question,
    detail: item.answer,
  }));

  return <LessonNavigator title="General Knowledge" description="Build everyday knowledge with quick learning cards." items={items} accent="violet" />;
}

export default GK;

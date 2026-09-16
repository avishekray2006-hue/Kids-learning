import LessonNavigator from "../components/LessonNavigator";
import computers from "../data/computers";

function Computers() {
  const items = computers.map((item) =>
    item.name === "CPU"
      ? {
          ...item,
          name: "CPU (System Unit)",
          image:
            "https://commons.wikimedia.org/wiki/Special:FilePath/Desktop_PC_Tower_Vector_Image_Clipart.png?width=500",
        }
      : item
  );

  return <LessonNavigator title="Computer Basics" description="Learn the names of common computer parts." items={items} />;
}

export default Computers;

import LessonNavigator from "../components/LessonNavigator";
import foodItems from "../data/foodItems";

function FoodItems() {
  return <LessonNavigator title="Food Items" description="Discover familiar foods and their names." items={foodItems} accent="orange" />;
}

export default FoodItems;

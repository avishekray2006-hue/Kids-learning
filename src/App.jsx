import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import GK from "./pages/GK";
import Quiz from "./pages/Quiz";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import Alphabet from "./pages/Alphabet";
import Numbers from "./pages/Numbers";
import HindiAlphabet from "./pages/HindiAlphabet";
import WildAnimals from "./pages/WildAnimals";
import PetAnimals from "./pages/PetAnimals";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import Colours from "./pages/Colors";
import Tables from "./pages/Tables";
import Year from "./pages/Year";
import Birds from "./pages/Birds";
import BodyParts from "./pages/BodyParts";
import Flowers from "./pages/Flowers";
import Vehicles from "./pages/Vehicles";
import Shapes from "./pages/Shapes";
import Days from "./pages/Days";
import Computers from "./pages/Computers";
import FoodItems from "./pages/FoodItems";
import Seasons from "./pages/Seasons";
import TextToSpeech from "./pages/TextToSpeech";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* ================= PUBLIC PAGES ================= */}

        <Route path="/" element={<Signup />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/Signup" element={<Signup />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/help" element={<Help />} />




        {/* ================= PROTECTED PROFILE ================= */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />


        {/* ================= LEARNING PAGES ================= */}

        <Route path="/alphabet" element={<Alphabet />} />

        <Route path="/numbers" element={<Numbers />} />

        <Route path="/hindialphabet" element={<HindiAlphabet />} />

        <Route path="/wildanimals" element={<WildAnimals />} />

        <Route path="/petanimals" element={<PetAnimals />} />

        <Route path="/fruits" element={<Fruits />} />

        <Route path="/vegetables" element={<Vegetables />} />

        <Route path="/colours" element={<Colours />} />

        <Route path="/tables" element={<Tables />} />

        <Route path="/year" element={<Year />} />

        <Route path="/birds" element={<Birds />} />

        <Route path="/bodyPart" element={<BodyParts />} />

        <Route path="/flowers" element={<Flowers />} />

        <Route path="/vehicles" element={<Vehicles />} />

        <Route path="/shapes" element={<Shapes />} />

        <Route path="/days" element={<Days />} />

        <Route path="/computers" element={<Computers />} />

        <Route path="/foodItems" element={<FoodItems />} />

        <Route path="/seasons" element={<Seasons />} />

        <Route path="/tts" element={<TextToSpeech />} />

        <Route path="/gk" element={<GK />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
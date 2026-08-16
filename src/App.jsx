import { Routes, Route } from "react-router-dom";

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

        {/* Public Routes */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

        <Route
          path="/help"
          element={
            <ProtectedRoute>
              <Help />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Courses - Protected */}
        <Route
          path="/alphabet"
          element={
            <ProtectedRoute>
              <Alphabet />
            </ProtectedRoute>
          }
        />

        <Route
          path="/numbers"
          element={
            <ProtectedRoute>
              <Numbers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hindialphabet"
          element={
            <ProtectedRoute>
              <HindiAlphabet />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wildanimals"
          element={
            <ProtectedRoute>
              <WildAnimals />
            </ProtectedRoute>
          }
        />

        <Route
          path="/petanimals"
          element={
            <ProtectedRoute>
              <PetAnimals />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fruits"
          element={
            <ProtectedRoute>
              <Fruits />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vegetables"
          element={
            <ProtectedRoute>
              <Vegetables />
            </ProtectedRoute>
          }
        />

        <Route
          path="/colours"
          element={
            <ProtectedRoute>
              <Colours />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tables"
          element={
            <ProtectedRoute>
              <Tables />
            </ProtectedRoute>
          }
        />

        <Route
          path="/year"
          element={
            <ProtectedRoute>
              <Year />
            </ProtectedRoute>
          }
        />

        <Route
          path="/birds"
          element={
            <ProtectedRoute>
              <Birds />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bodyPart"
          element={
            <ProtectedRoute>
              <BodyParts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/flowers"
          element={
            <ProtectedRoute>
              <Flowers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vehicles"
          element={
            <ProtectedRoute>
              <Vehicles />
            </ProtectedRoute>
          }
        />

        <Route
          path="/shapes"
          element={
            <ProtectedRoute>
              <Shapes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/days"
          element={
            <ProtectedRoute>
              <Days />
            </ProtectedRoute>
          }
        />

        <Route
          path="/computers"
          element={
            <ProtectedRoute>
              <Computers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/foodItems"
          element={
            <ProtectedRoute>
              <FoodItems />
            </ProtectedRoute>
          }
        />

        <Route
          path="/seasons"
          element={
            <ProtectedRoute>
              <Seasons />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tts"
          element={
            <ProtectedRoute>
              <TextToSpeech />
            </ProtectedRoute>
          }
        />

        <Route
          path="/gk"
          element={
            <ProtectedRoute>
              <GK />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
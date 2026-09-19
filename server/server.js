const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");

const app = express();

// ================= MIDDLEWARE =================

app.use(cors());
app.use(express.json());


// ================= DATABASE =================

connectDB();


// ================= ROUTES =================

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);


// ================= HOME =================

app.get("/", (req, res) => {
  res.json({
    message: "Learning App Backend Running 🚀",
  });
});


// ================= 404 =================

app.use((req, res) => {
  res.status(404).json({
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});


// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
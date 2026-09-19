const Quiz = require("../models/Quiz");

const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();

    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get quiz questions",
      error: error.message,
    });
  }
};

const createQuiz = async (req, res) => {
  try {
    const { question, options, answer } = req.body;

    const quiz = await Quiz.create({
      question,
      options,
      answer,
    });

    res.status(201).json({
      message: "Question added successfully",
      quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add question",
      error: error.message,
    });
  }
};

module.exports = {
  getQuizzes,
  createQuiz,
};
import { useState } from "react";

const mockQuestions = [
  "Tell me about yourself.",
  "What are your strengths and weaknesses?",
  "Why do you want this job?",
  "Describe a challenging project you've worked on.",
  "Where do you see yourself in 5 years?",
];

const MockInterview = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");

  const nextQuestion = () => {
    if (answer.trim() === "") {
      alert("Please enter your answer before proceeding.");
      return;
    }
    
    setAnswer(""); // Clear input for next question
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Mock interview completed!");
      setCurrentQuestion(0);
    }
  };

  return (
    <div className="ml-64 p-10">
      <h2 className="text-2xl font-bold mb-5">Mock Interview</h2>

      <div className="bg-white p-5 shadow-lg rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Question:</h3>
        <p className="text-gray-800 text-xl mb-4">{mockQuestions[currentQuestion]}</p>

        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Type your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>

        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          onClick={nextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default MockInterview;

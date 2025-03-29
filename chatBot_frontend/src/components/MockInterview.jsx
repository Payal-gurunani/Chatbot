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

  const nextQuestion = () => {
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

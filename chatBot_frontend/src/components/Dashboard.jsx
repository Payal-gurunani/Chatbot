import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  // Sample data for interview progress
  const data = [
    { name: "Week 1", score: 50 },
    { name: "Week 2", score: 60 },
    { name: "Week 3", score: 75 },
    { name: "Week 4", score: 85 },
  ];

  return (
    <div className="ml-64 p-10">
      <h2 className="text-2xl font-bold mb-5">Interview Progress Dashboard</h2>

      {/* Performance Graph */}
      <div className="bg-white p-5 shadow-lg rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Performance Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#4F46E5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-green-800 font-bold">Strengths</h3>
          <ul className="list-disc list-inside text-green-700">
            <li>Technical Questions</li>
            <li>Problem-Solving</li>
          </ul>
        </div>
        <div className="bg-red-100 p-4 rounded-lg">
          <h3 className="text-red-800 font-bold">Weaknesses</h3>
          <ul className="list-disc list-inside text-red-700">
            <li>Behavioral Questions</li>
            <li>Time Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

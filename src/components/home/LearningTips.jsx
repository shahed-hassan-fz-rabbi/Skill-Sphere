const LearningTips = () => {
  return (
    <div className="p-10 bg-base-200">

      <h2 className="text-3xl font-bold text-center mb-8">
        📌 Learning Tips
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="card bg-base-100 shadow-md p-5">
          <h3 className="text-xl font-semibold mb-2">🧠 Study Smart</h3>
          <p>Break your learning into small chunks and stay consistent.</p>
        </div>

        <div className="card bg-base-100 shadow-md p-5">
          <h3 className="text-xl font-semibold mb-2">⏱ Time Management</h3>
          <p>Use Pomodoro technique to manage your study time.</p>
        </div>

        <div className="card bg-base-100 shadow-md p-5">
          <h3 className="text-xl font-semibold mb-2">🎯 Set Goals</h3>
          <p>Define clear goals and track your progress regularly.</p>
        </div>

      </div>

    </div>
  );
};

export default LearningTips;
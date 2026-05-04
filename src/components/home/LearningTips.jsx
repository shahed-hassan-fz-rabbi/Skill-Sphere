const LearningTips = () => {
  return (
    <div className="p-10 bg-base-200">

      <h2 className="text-3xl font-bold text-center mb-8">
        Learning Tips
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="card bg-base-100 shadow-md p-5">
          <h3 className="text-xl font-semibold mb-2">🧠 Study Smart</h3>
          <p>“The beautiful thing about learning is that no one can take it away from you.” — B.B. King</p>
        </div>

        <div className="card bg-base-100 shadow-md p-5">
          <h3 className="text-xl font-semibold mb-2">⏱ Time Management</h3>
          <p>“Success is the sum of small efforts, repeated day in and day out.” — Robert Collier</p>
        </div>

        <div className="card bg-base-100 shadow-md p-5">
          <h3 className="text-xl font-semibold mb-2">🎯 Set Goals</h3>
          <p>Break massive subjects into tiny, manageable units. Aiming to read three specific pages prevents overwhelm.</p>
        </div>

      </div>

    </div>
  );
};

export default LearningTips;
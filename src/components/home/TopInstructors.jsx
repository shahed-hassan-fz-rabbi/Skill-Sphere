import { coursedb } from "@/data/coursedb";

const TopInstructors = () => {

  // Step 1: group instructors
  const instructorMap = {};

  coursedb.forEach((course) => {
    if (!instructorMap[course.instructor]) {
      instructorMap[course.instructor] = {
        name: course.instructor,
        totalRating: 0,
        count: 0,
        levelScore: 0,
      };
    }

    instructorMap[course.instructor].totalRating += course.rating;
    instructorMap[course.instructor].count += 1;

    // level weight
    if (course.level === "Beginner") instructorMap[course.instructor].levelScore += 1;
    if (course.level === "Intermediate") instructorMap[course.instructor].levelScore += 2;
    if (course.level === "Advanced") instructorMap[course.instructor].levelScore += 3;
  });

  // Step 2: convert to array + calculate avg
  const instructors = Object.values(instructorMap).map((inst) => ({
    ...inst,
    avgRating: inst.totalRating / inst.count,
  }));

  // Step 3: sort by rating + level
  const topInstructors = instructors
    .sort((a, b) => {
      const scoreA = a.avgRating + a.levelScore * 0.1;
      const scoreB = b.avgRating + b.levelScore * 0.1;
      return scoreB - scoreA;
    })
    .slice(0, 4);

  return (
    <div className="p-10 bg-base-100">

      <h2 className="text-3xl font-bold text-center mb-8">
        🏆 Top Instructors
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {topInstructors.map((inst, index) => (
          <div key={index} className="card bg-base-200 p-5 text-center shadow-md">

            <img
              src={`https://i.pravatar.cc/150?img=${index + 1}`}
              className="w-20 h-20 mx-auto rounded-full mb-3"
            />

            <h3 className="font-semibold">{inst.name}</h3>

            <p className="text-sm text-gray-500">
              ⭐ {inst.avgRating.toFixed(1)}
            </p>

            <p className="text-xs">
              Courses: {inst.count}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default TopInstructors;
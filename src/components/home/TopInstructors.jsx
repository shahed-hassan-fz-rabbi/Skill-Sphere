import { coursedb } from "@/data/coursedb";

const TopInstructors = () => {
  const instructorMap = {};

  coursedb.forEach((course) => {
    if (!instructorMap[course.instructor]) {
      instructorMap[course.instructor] = {
        name: course.instructor,
        
        image: course.instructorImage,
        totalRating: 0,
        count: 0,
        levelScore: 0,
      };
    }
    instructorMap[course.instructor].totalRating += course.rating;
    instructorMap[course.instructor].count += 1;
    if (course.level === "Beginner") instructorMap[course.instructor].levelScore += 1;
    if (course.level === "Intermediate") instructorMap[course.instructor].levelScore += 2;
    if (course.level === "Advanced") instructorMap[course.instructor].levelScore += 3;
  });

  const topInstructors = Object.values(instructorMap)
    .map((inst) => ({
      ...inst,
      avgRating: inst.totalRating / inst.count,
    }))
    .sort((a, b) => {
      const scoreA = a.avgRating + a.levelScore * 0.1;
      const scoreB = b.avgRating + b.levelScore * 0.1;
      return scoreB - scoreA;
    })
    .slice(0, 4);

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">🏆 Top Instructors</h2>
          <p className="text-base-content/60">
            Learn from the best in the industry
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topInstructors.map((inst, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="card-body items-center text-center p-6">
                {/* Avatar */}
                <div className="avatar mb-3">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-2">
                    <img
                      src={inst.image}
                      alt={inst.name}
                    />
                  </div>
                </div>

                {/* Badge */}
                {index === 0 && (
                  <span className="badge badge-warning badge-sm mb-1">
                    🥇 Top Rated
                  </span>
                )}

              
                <h3 className="font-bold text-lg">{inst.name}</h3>

              
                <div className="flex items-center gap-1 text-yellow-400">
                  {"★".repeat(Math.round(inst.avgRating))}
                  <span className="text-base-content/60 text-sm ml-1">
                    ({inst.avgRating.toFixed(1)})
                  </span>
                </div>

                {/* Courses Count */}
                <p className="text-sm text-base-content/60 mt-1">
                  📚 {inst.count} {inst.count === 1 ? "Course" : "Courses"}
                </p>

                <button className="btn btn-primary btn-sm btn-outline mt-3 w-full">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
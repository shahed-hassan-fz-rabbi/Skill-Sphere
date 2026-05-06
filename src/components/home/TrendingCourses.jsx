import { coursedb } from "@/data/coursedb";
import CourseCard from "@/components/CourseCard";

export default function TrendingCourses() {
  
  const trending = coursedb.slice(-3);

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-3">
            🔥 Trending Courses
          </h2>
          <p className="text-base-content/60">
            Most popular courses right now
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trending.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
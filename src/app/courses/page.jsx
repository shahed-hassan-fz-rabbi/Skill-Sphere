import Link from "next/link";
import { coursedb } from "@/data/coursedb";

const CoursesPage = () => {
  const levelColor = {
    Beginner: "badge-success",
    Intermediate: "badge-warning",
    Advanced: "badge-error",
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {coursedb.map((course) => (
          <div key={course.id} className="card bg-base-100 shadow-md">

            <figure>
              <img src={course.image} className="h-48 w-full object-cover" />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>⭐ {course.rating}</p>

              <span className={`badge ${levelColor[course.level]}`}>
                {course.level}
              </span>

              <div className="card-actions justify-end mt-4">
                <Link href={`/courses/${course.id}`}>
                  <button className="btn btn-primary">
                    View Details
                  </button>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
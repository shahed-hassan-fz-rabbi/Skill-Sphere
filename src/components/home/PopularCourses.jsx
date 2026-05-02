import Link from "next/link";
import { coursedb } from "@/data/coursedb";

const PopularCourses = () => {

  const topCourses = [...coursedb]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="p-10 bg-base-100">

      <h2 className="text-3xl font-bold mb-8 text-center">
        Popular Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {topCourses.map((course) => (
          <div key={course.id} className="card bg-base-200 shadow-md">

            <figure>
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p>Instructor: {course.instructor}</p>
              <p>⭐ {course.rating}</p>

              <div className="card-actions justify-end">
                <Link href={`/courses/${course.id}`}>
                  <button className="btn btn-primary btn-sm">
                    View Details
                  </button>
                </Link>
              </div>
            </div>

          </div>
        ))}

      </div>

      <div className="text-center mt-6">
        <Link href="/courses">
          <button className="btn btn-outline">
            View All Courses
          </button>
        </Link>
      </div>

    </div>
  );
};

export default PopularCourses;
import { FaStar, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-base-200">
      <figure className="overflow-hidden h-48">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body p-5">
        <span className="badge badge-primary badge-sm badge-outline w-fit">
          {course.category}
        </span>
        <h2 className="card-title text-base font-bold line-clamp-2">
          {course.title}
        </h2>

        <div className="flex items-center gap-4 text-sm text-base-content/70">
          <div className="flex items-center gap-1">
            <FaUser className="text-primary text-xs" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400 text-xs" />
            <span className="font-semibold">{course.rating}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="badge badge-ghost badge-sm">{course.level}</span>
          <Link href={`/courses/${course.id}`}>
            <button className="btn btn-primary btn-sm">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
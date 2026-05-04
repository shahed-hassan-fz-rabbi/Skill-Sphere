import { FaStar, FaClock, FaUser, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

const curriculum = [
  "Introduction & Setup",
  "Core Concepts & Fundamentals",
  "Hands-on Projects",
  "Advanced Topics",
  "Real-world Application",
  "Final Project & Review",
];

export default function CourseDetailsCard({ course }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left - Main Info */}
      <div className="lg:col-span-2 space-y-6">
        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Title & Meta */}
        <div>
          <span className="badge badge-primary badge-outline mb-2">
            {course.category}
          </span>
          <h1 className="text-3xl font-bold text-base-content mb-3">
            {course.title}
          </h1>
          <p className="text-base-content/70 text-lg leading-relaxed">
            {course.description}
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-6 text-sm text-base-content/80">
          <div className="flex items-center gap-2">
            <FaUser className="text-primary" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span>{course.rating} / 5.0</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaLayerGroup className="text-primary" />
            <span>{course.level}</span>
          </div>
        </div>

       
        <div className="bg-base-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Course Curriculum</h2>
          <ul className="space-y-3">
            {curriculum.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-success shrink-0" />
                <span className="text-base-content/80">
                  Module {index + 1}: {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

     
      <div className="lg:col-span-1">
        <div className="sticky top-24 card bg-base-100 shadow-2xl border border-base-300">
          <div className="card-body space-y-4">
            <h3 className="text-2xl font-bold text-primary">Free Enrollment</h3>
            <p className="text-base-content/60 text-sm">
              Get full lifetime access to this course.
            </p>
            <button className="btn btn-primary w-full text-lg">
              Enroll Now 🚀
            </button>
            <div className="divider">What you'll get</div>
            <ul className="space-y-2 text-sm text-base-content/70">
              <li>✅ Full course access</li>
              <li>✅ Downloadable resources</li>
              <li>✅ Certificate of completion</li>
              <li>✅ Community support</li>
              <li>✅ Lifetime updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
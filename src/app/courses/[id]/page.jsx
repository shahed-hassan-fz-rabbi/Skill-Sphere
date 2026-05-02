import { coursedb } from "@/data/coursedb";

const CourseDetails = async ({ params }) => {
  const { id } = await params;   // 🔥 IMPORTANT

  const course = coursedb.find((c) => c.id === Number(id));

  if (!course) {
    return <p className="p-10">Course not found</p>;
  }

  return (
    <div className="p-10 max-w-3xl mx-auto">

      <img
        src={course.image}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
      <p>Level: {course.level}</p>
      <p>Category: {course.category}</p>
      <p>⭐ {course.rating}</p>

      <p className="mt-4">{course.description}</p>

    </div>
  );
};

export default CourseDetails;
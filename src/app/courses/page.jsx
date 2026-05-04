"use client";

import { useState } from "react";
import { coursedb } from "@/data/coursedb";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filtered = coursedb.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">All Courses</h1>
        <p className="text-base-content/60">
          Explore our wide range of skill-based courses
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="🔍 Search courses by title..."
          className="input input-bordered w-full max-w-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Course Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center text-xl text-base-content/50 mt-20">
          No courses found for "{search}"
        </div>
      )}
    </div>
  );
}
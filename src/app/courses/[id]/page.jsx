"use client";

import { use, useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { coursedb } from "@/data/coursedb";
import CourseDetailsCard from "@/components/CourseDetailsCard";

export default function CourseDetailsPage({ params }) {
  
  const { id } = use(params);
  
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push(`/login?redirect=/courses/${id}`);
    }
  }, [session, isPending]);

  useEffect(() => {
    const found = coursedb.find((c) => c.id === Number(id));
    setCourse(found);
  }, [id]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session?.user) return null;

  if (!course) {
    return (
      <div className="text-center mt-20 text-2xl text-error font-semibold">
        Course not found!
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <CourseDetailsCard course={course} />
    </div>
  );
}